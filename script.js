function login() {

  const userType = document.getElementById('userType').value;
  
  if (userType === 'volontier') {

      window.location.href = 'volontier.html';

  } else if (userType === 'small-business') {

      window.location.href = 'smallbusiness.html';

  } else {

      window.location.href = 'admin.html';

  }

}