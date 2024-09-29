


const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.getElementById('navbar-menu');

menuIcon.addEventListener('click', () => {
    navbar-menu.classList.toggle('active');
});

document.getElementById('consultationbtn').addEventListener("click", function(){

    alert('successful! you have already booked a consultation');

});




document.getElementById('minus').addEventListener("click", function(){
    const image = document.getElementById('minus');
   
    document.getElementById('description-card').innerHTML = '' ;

    document.getElementById('firstcard').style.backgroundColor = '#F3F3F3' ;
    
   image.style.display = 'none';
    
});



document.getElementById('proposalbtn').addEventListener("click", function(){

     alert('success! we will contact you as soon as possible.');

});

document.getElementById('submitbtn').addEventListener("click", function(){

    alert('your message has been received!  we will send you an explanatory email as soon as possible.');

});



document.getElementById('buttonbtn').addEventListener("click", function(){

    alert('Alright! From now on, you will receive all the news so that you are up to date.');

});


document.getElementById('btn1').addEventListener('click', function() {
   
    const paragraph = document.getElementById('paragone');
    paragraph.innerHTML += ' To enhance the visibility and performance of a local restaurant, we implemented a targeted pay-per-click (PPC) campaign. This strategic approach not only focused on specific demographics and local search terms but also utilized compelling ad copy and enticing visuals. As a result, we achieved a remarkable 50% increase in website traffic, driving more potential customers to explore the restaurants offerings. Additionally, this surge in interest translated to a 25% increase in sales, demonstrating the campaigns effectiveness in converting online engagement into tangible business growth.';
});

document.getElementById('btn2').addEventListener('click', function() {
   
    const paragraph = document.getElementById('paragtwo');
    paragraph.innerHTML += ' For a B2B software company, we implemented a comprehensive SEO strategy that not only resulted in first-page rankings for critical keywords but also significantly enhanced the company’s online visibility. By conducting thorough keyword research and optimizing both on-page and off-page elements, we ensured that the content resonated with the target audience. As a result, the company experienced a remarkable 200% increase in organic traffic, leading to more qualified leads and ultimately contributing to higher conversion rates. This strategy not only boosted brand awareness but also positioned the company as a thought leader in its industry.';
});

document.getElementById('btn3').addEventListener('click', function() {
   
    const paragraph = document.getElementById('paragthree');
    paragraph.innerHTML += ' For a national retail chain, we developed a comprehensive social media marketing campaign aimed at enhancing brand awareness and customer engagement. By leveraging targeted content, interactive posts, and strategic promotions, we successfully increased the brands social media followers by 25%. This growing online community not only fostered a stronger connection with customers but also contributed to a 20% increase in online sales, showcasing the campaigns effectiveness in driving both engagement and revenue.';
});