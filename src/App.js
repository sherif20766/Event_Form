

//Object containging form element variables
const FormElements = {

	finalPrice: 		document.getElementById("final-price"),
	numberOfAttendees:  document.getElementById("number-of-attendees"),
	attendeesCount: 	document.getElementById("attendees-count"),
	date: 				document.getElementById("date-pick"),
	dateFull:			document.getElementById("date-full"),

}

/**
 * Calculates final checkout price based on number of tickets bought
 * and updates attendees count
 *
 */
const calculatePrice = () => {

	const numberOfAttendees = FormElements.numberOfAttendees;
	const finalPrice 		= FormElements.finalPrice;

	// if number of attendees between 1 and 3 (inclusive), ticket price: £50
	if(numberOfAttendees.value >= 0 && numberOfAttendees.value <= 3) {
		finalPrice.innerHTML = "£"+ (numberOfAttendees.value * 50).toFixed(2);
		updateAttendeesCount();
	}
	// if number of attendees between 4 and 6 (inclusive), ticket price: £40
	else if(numberOfAttendees.value >= 4 && numberOfAttendees.value <= 6) {
		finalPrice.innerHTML = "£"+ (numberOfAttendees.value * 40).toFixed(2);
		updateAttendeesCount();
	}
	// if number of attendees between 7 and 9 (inclusive), ticket price: £35
	else if(numberOfAttendees.value >= 7 && numberOfAttendees.value <=9) {
		finalPrice.innerHTML = "£"+ (numberOfAttendees.value * 35).toFixed(2);
		updateAttendeesCount();
	}
	// if number of attendees more than 9, display message
	else {
		finalPrice.innerHTML = "Choose between 1 & 9";
		updateAttendeesCount();
	}

};


/**
 * Updates the attendees count DOM element
 *
 */
const updateAttendeesCount = () => {

	const attendeesCount = FormElements.attendeesCount;

	attendeesCount.innerHTML = FormElements.numberOfAttendees.value;
};


/**
 * Validates the date picked by customer. Displays error message 
 * if unavailable day selected 
 *
 */
const validateDate = () => {

	const dateFull  = FormElements.dateFull;
	const date 	    = FormElements.date;


	const unavailableDays = ["2019-08-07", "2019-08-20", "2019-09-01"];

	dateFull.innerHTML = "";

	//error message displayed if date chosen is found in the unavailableDays array.
	if(unavailableDays.indexOf(date.value) !== -1) {
		dateFull.innerHTML = "Sorry, but the date you have selected is unavailable. Please select another.";
	};

};

// Event listeners added to `Number of Attendees` & `Choose a Day` fields	
FormElements.numberOfAttendees.addEventListener("change", calculatePrice);
FormElements.date.addEventListener("change", validateDate);
