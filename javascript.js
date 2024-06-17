// $(document).ready(function() {
//     // Click event listener
//     $('.gallery__image').on('click', function() {
//         var $mediaBody = $(this).siblings('.media__body');
        
//         // Toggle active class for media__body
//         $mediaBody.toggleClass('active');

//         // Close media__body when clicking outside
//         $(document).on('click', function(event) {
//             if (!$(event.target).closest('.gallery__item').length) {
//                 $mediaBody.removeClass('active');
//             }
//         });
        
//         // Prevent click on media__body from closing it
//         $mediaBody.on('click', function(event) {
//             event.stopPropagation();
//         });
//     });

//     // Hover event listener (optional)
//     $('.gallery__image').hover(
//         function() {
//             var $mediaBody = $(this).siblings('.media__body');
//             $mediaBody.addClass('active');
//         },
//         function() {
//             var $mediaBody = $(this).siblings('.media__body');
//             $mediaBody.removeClass('active');
//         }
//     );
// });




// $(document).ready(function() {
//     // Handle click on brand images
//     $('.brand-image-link').click(function(e) {
//         e.preventDefault(); // Prevent default action of the link

//         var imageUrl = $(this).attr('href');

//         // Create modal structure
//         var modalHtml = `
//             <div class="modal">
//                 <div class="modal-content">
//                     <span class="close-modal">&times;</span>
//                     <a href="#" class="back-to-home">Back to Homepage</a>
//                     <img src="${imageUrl}" alt="Full Image">
//                 </div>
//             </div>
//         `;

//         // Append modal to body
//         $('body').append(modalHtml);

//         // Close modal when clicking on close button or back to home link
//         $('.close-modal, .back-to-home').click(function() {
//             $('.modal').remove();
//         });

//         // Prevent closing modal when clicking inside the modal content
//         $('.modal-content').click(function(e) {
//             e.stopPropagation();
//         });
//     });
// });


// $(document).ready(function(){
//     // Initialize Lightbox
//     lightbox.option({
//         'resizeDuration': 200,
//         'wrapAround': true
//     });
// });





// // Optionally, you can adjust the animation speed and behavior here
// document.addEventListener('DOMContentLoaded', function() {
//     const marqueeContainer = document.querySelector('.marquee-container');
//     const marqueeContent = document.querySelector('.marquee-content');

//     // Adjusting marquee speed
//     const marqueeSpeed = 20; // Adjust this value for desired speed (higher is slower)

//     // Calculate animation duration based on content width
//     const contentWidth = marqueeContent.offsetWidth;
//     const containerWidth = marqueeContainer.offsetWidth;
//     const animationDuration = (contentWidth / containerWidth) * marqueeSpeed;

//     // Set animation duration
//     marqueeContent.style.animationDuration = `${animationDuration}s`;
// });
