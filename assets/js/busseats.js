document.addEventListener("DOMContentLoaded", function () {
  let seatCheckboxes = document.querySelectorAll('.seats input[type="checkbox"]');
  let totalAmountDisplay = document.querySelector('.total-amount-value');

  let seatPrice = 385;
  let totalAmount = 0;

  seatCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
          let seatLabel = checkbox.nextElementSibling;
          let seatNumbers = seatLabel.innerHTML;
          let selectedSeats = document.querySelectorAll('.seats input[type="checkbox"]:checked').length;
          if (selectedSeats > 5) {
              checkbox.checked = false;
              alert('Max 5 seats are selected');
              return;
          }

          if (checkbox.checked) {
              totalAmount += seatPrice;
              seatLabel.style.backgroundColor = '#dddddd';
          } else {
              totalAmount -= seatPrice;
              seatLabel.style.backgroundColor = '#25b9f4';
          }

          totalAmountDisplay.innerHTML = totalAmount;
      });
  });
});
  function generateInvoice() {
      let selectedSeats = document.querySelectorAll('.seats input[type="checkbox"]:checked');
      if (selectedSeats.length === 0) {
          alert('Please select at least two seats before making a payment.');
          return;
      }

      let numberOfSeats = selectedSeats.length;
      let seatNumbers = Array.from(selectedSeats).map(seat => seat.nextElementSibling.innerHTML).join(', ');
      let totalAmount = document.querySelector('.total-amount-value').innerHTML;

      let invoiceContent = `
          Invoice<br>
          -------------------------<br>
          Seat Numbers: ${seatNumbers}<br>
          Number of Seats: ${numberOfSeats}<br>
          Total Amount: Rs${totalAmount}<br>
          -------------------------<br>
          Thank you for choosing our service!
      `;

      document.write(invoiceContent);
  }

