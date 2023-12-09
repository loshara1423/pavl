<button id="review-button">Оставить отзыв</button>
  
`;

function addReview() {
  const review = document.createElement("div");
  review.innerHTML = "Ваш отзыв добавлен!";
  document.
  body.appendChild(review);
}

document.getElementById(“review-button”).addEventListener(“click”, addReview);
