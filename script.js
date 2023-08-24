"use strict";
moms(100);
function moms(beløb, moms = 0.25) {
  const result = beløb + beløb * moms;
  console.log(result);
  console.log("Beløb inklusiv moms er: ", result);
}
