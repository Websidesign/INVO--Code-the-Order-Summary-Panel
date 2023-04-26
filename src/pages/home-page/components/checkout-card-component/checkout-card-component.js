let isLoading = false;

export const CheckoutCardComponent = () => {
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );
  const confirmButton = checkoutCardComponent.querySelector(".btn-primary");
  const cancelButton = checkoutCardComponent.querySelector(".btn-secondary");

  confirmButton.addEventListener("click", () => {
    if (isLoading) {
      console.log("The payment is already processing");
      return;
    }
    confirmButton.setAttribute("data-loading", "1");
    isLoading = true;
    cancelButton.setAttribute("disabled", "disabled");
  });
};
