import './App.css';


function loginWighGoogle(){
  const clientId = "580193018098-65pgl90826fmd31chpbb9areco0mn6hs.apps.googleusercontent.com"
  const redirect_uri = "http://localhost:8080/welcome"
  const scope = "profile"
  const response_type="code"
  
  const url = 'https://accounts.google.com/o/oauth2/v2/auth?'
  +'client_id='+clientId
  +'&redirect_uri='+redirect_uri
  +'&response_type='+response_type
  +'&scope='+scope
  
  console.log('welcome')

  showSocialLoginPopup(url)
}

function showSocialLoginPopup(url){
  const popupHeight = '500'
  const popupWidth = '500'
  let popupOptions = 'height=--popupHeight--,width=--popupWidth--,left=--popupX--,top=--popupY--,scrollbars=yes,resizable=yes'

  popupOptions = popupOptions.replace('--popupHeight--', popupHeight)
  popupOptions = popupOptions.replace('--popupWidth--', popupWidth)

  openPopup(url, popupOptions)
  return false
}

function openPopup(url, options){
  window.open(
    url,
    '_blank',
    options
  )
}

function logout(){
  // remove from localStorage or cookie 
}

function App() {
  return (
    <div>
     <img alt="" src="image/google/web_light_rd_SI@2x.png" onClick={loginWighGoogle}/>
    </div>
  );
}

export default App;
