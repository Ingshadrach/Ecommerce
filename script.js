document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

        let cartQuantity = 0;
        let cartTotalPrice = 0;

        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartQuantityElement = document.getElementById('cart-quantity');
        const cartTotalPriceElement = document.getElementById('cart-total-price');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const price = parseFloat(button.getAttribute('data-price'));
                cartQuantity++;
                cartTotalPrice += price;

                cartQuantityElement.textContent = cartQuantity;
                cartTotalPriceElement.textContent = cartTotalPrice.toFixed(2);
            });
        });

         const chatbot = document.getElementById('chatbot');
        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatbotInput = document.getElementById('chatbotInput');

        function toggleChatbot() {
            chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
        }

        function sendMessage() {
            const userMessage = chatbotInput.value.trim();
            if (userMessage) {
                appendMessage('User', userMessage);
                chatbotInput.value = '';
                setTimeout(() => {
                    const botResponse = getBotResponse(userMessage);
                    appendMessage('Bot', botResponse);
                }, 500);
            }
        }

        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${sender}: ${message}`;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function getBotResponse(message) {
            const products = ['Laptop', 'Smartphone', 'Headphones', 'Camera'];
            if (message.toLowerCase().includes('products')) {
                return `We have the following products available: ${products.join(', ')}.`;
            }
            return "I'm here to help! Ask me about our products.";
        }

        function saveUserData(event) {
          event.preventDefault();
          const userName = document.getElementById('userName').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          const userData = {
        userName,
        email,
        password
          };
          console.log('User data saved:', userData);
          alert('User data saved successfully!');
          closeModal();
        }

         const loginButton = document.querySelector('.login a');
        const modal = document.getElementById('loginModal');

        loginButton.addEventListener('click', function(event) {
          event.preventDefault();
          modal.style.display = 'block';
        });

        function closeModal() {
          modal.style.display = 'none';
        }

        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        };

         function saveUserData(event) {
          event.preventDefault();
          const userName = document.getElementById('userName').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirmPassword').value;

          if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
          }

          localStorage.setItem('userName', userName);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);

          alert("User data saved successfully!");
          closeModal();
        }

 