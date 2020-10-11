/*
 * Andrew Coakley (A00398990)
 * Kinshuk Chadha (A00431288)
 * Alexander Lamey (A00410007)
 * Priya {INSERT LAST NAME HERE}{INSERT A # HERE}
 *
 * js file that is used by both the compose screens and the
 * viewing screens to display helps for the labels.
 */

//The size and starting location of the new window to be created.
const SPECS = "width=600, height=300, top=300, left=500";

/*Show help methods*/
/*
 * Function that opens the helpTo.html in a small window.
 * The html files deal with loading the messages.
 *
 * no inputs
 *
 * returns N/A
 */
function showHelpForTo() {
  window.open("./scripts/helps/helpTo.html", "MsgWindow", SPECS);
}

/*
 * Function that opens the helpFrom.html in a small window.
 * The html files deal with loading the messages.
 *
 * no inputs
 *
 * returns N/A
 */
function showHelpForFrom() {
  window.open("./scripts/helps/helpFrom.html", "MsgWindow", SPECS);
}

/*
 * Function that opens the helpCc.html in a small window.
 * The html files deal with loading the messages.
 *
 * no inputs
 *
 * returns N/A
 */
function showHelpForCc() {
  window.open("./scripts/helps/helpCc.html", "MsgWindow", SPECS);
}

/*
 * Function that opens the helpSubject.html in a small window.
 * The html files deal with loading the messages.
 *
 * no inputs
 *
 * returns N/A
 */
function showHelpForSubject() {
  window.open("./scripts/helps/helpSubject.html", "MsgWindow", SPECS);
}

/*
 * Function that opens the helpBody.html in a small window.
 * The html files deal with loading the messages.
 *
 * no inputs
 *
 * returns N/A
 */
function showHelpForBody() {
  window.open("./scripts/helps/helpBody.html", "MsgWindow", SPECS);
}
