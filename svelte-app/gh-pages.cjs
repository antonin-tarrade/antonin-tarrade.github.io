var ghpages = require('gh-pages');

ghpages.publish(
    './public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/antonin-tarrade/Eportfolio', // Update to point to your repository  
        user: {
            name: 'antonin-tarrade', // update to use your name
            email: 'antotarrade@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)