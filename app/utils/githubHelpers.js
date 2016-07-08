var axios = require('axios');

// optional github API params
var id = 'YOUR_CLIENT_ID',
    secret = 'YOUR_SECRET_ID',
    params = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username + params);
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, currentRepo) {
        return prev + currentRepo.stargazers_count;
    }, 0);
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        })

}

function calculateScores (players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars        
    ];

}

var helpers = {
    getPlayersInfo: function (players) {
        // fetch some data from github
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function (user) {
               return user.data;
            });
        }).catch(function (err) {
            console.warn('Errors in getPlayersInfo!', err);
        });
    },
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function(err) {
                console.warn('Error in players info: ', err);
            })

    }
};

module.exports = helpers;