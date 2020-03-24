import React from 'react';

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '353774115925-g76lj2djpa98rnsppf8d87fqpu26ht5j.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/yt-analytics.readonly'
            }).then(function () {
               window.GoogleAuth = window.gapi.auth2.getAuthInstance();
          
                // Listen for sign-in state changes.
                //GoogleAuth.isSignedIn.listen(updateSigninStatus);
            });
        });
    }
    
    onSignIn = () => {
        window.GoogleAuth.signIn();
    }

    render() {
        return (
            <div>
              <button onClick={this.onSignIn} type="button" className="btn btn-primary">Log in</button>
            </div> 
          );
    }
  }
  
  export default GoogleAuth;
  