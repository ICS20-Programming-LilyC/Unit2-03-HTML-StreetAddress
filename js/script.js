// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: March 9 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street name and number and displays it back to user

  // get street name from text field
  let streetname = document.getElementById("street-name").value
	// get number from text field and cast it to integer
  let streetnumber = parseInt(document.getElementById("street-number").value)

  // display name and number back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + streetname + " and your street number is " + streetnumber + "."
}