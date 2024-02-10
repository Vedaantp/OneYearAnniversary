import image1 from '../Data/images/1.JPG'
import image2 from '../Data/images/2.JPG'
import image3 from '../Data/images/3.JPG'
import image4 from '../Data/images/4.JPG'
import image5 from '../Data/images/5.JPG'
import image6 from '../Data/images/6.JPG'
import image7 from '../Data/images/7.JPG'
import image8 from '../Data/images/8.JPG'
import image9 from '../Data/images/9.JPG'
import image10 from '../Data/images/10.JPG'
import image11 from '../Data/images/11.JPG'
import image12 from '../Data/images/12.JPG'
import image13 from '../Data/images/13.JPG'
import image14 from '../Data/images/14.JPG'
import image15 from '../Data/images/15.JPG'
import image17 from '../Data/images/17.JPG'
import image18 from '../Data/images/18.JPG'
import image19 from '../Data/images/19.JPG'
import image20 from '../Data/images/20.JPG'
import image21 from '../Data/images/21.JPG'
import image22 from '../Data/images/22.JPG'
import image23 from '../Data/images/23.JPG'
import image24 from '../Data/images/24.JPG'
import image25 from '../Data/images/25.JPG'
import image26 from '../Data/images/26.JPG'
import image27 from '../Data/images/27.JPG'
import image28 from '../Data/images/28.JPG'
import image29 from '../Data/images/29.JPG'
import image30 from '../Data/images/30.JPG'
import image31 from '../Data/images/31.JPG'
import image32 from '../Data/images/32.JPG'

const objects = [
    { date: 'February 10, 2023', description: 'The day I asked you out. I love you so much.', image: image1 },
    { date: 'February 14, 2023', description: 'Our first valentines day together. I am so in love with you Jodie', image: image2 },
    { date: 'March 07, 2023', description: 'Just a random photo in the back of a car. This is a random picture but I love it you look so cute.', image: image3 },
    { date: 'March 10, 2023', description: 'At the mall trying glasses on for our 1 month anniversary after we went to Round One. You are so cutie.', image: image4 },
    { date: 'March 29, 2023', description: 'A cute funny picture of you. I love these types of pictures of you.', image: image5 },
    { date: 'March 29, 2023', description: 'When we went to Palm Springs for spring break. Why are you literally the cutest in the world... no MULTIVERSE.', image: image6 },
    { date: 'April 19, 2023', description: 'Our picnic date by the pond when we painted with water color on canvas LOL. I love love love love the painting you made like you are so good like omg.', image: image7 },
    { date: 'May 10, 2023', description: 'Our three months date at OC Museum. Yippeee we hit 3 months. PS IM OBSESSED OVER YOU.', image: image8 },
    { date: 'June 02, 2023', description: 'The day you took me on a date to the Source and we got Taco Stand. This was such a fun date thank youuuuu!', image: image9 },
    { date: 'June 21, 2023', description: 'Your first day of your internship. WOOOHOOO LOOK AT MY GIRL GO SO GIRL BOSS!', image: image10 },
    { date: 'June 27, 2023', description: 'A cutie little funny picture of you when you went to Seattle. I wish I was there I should have snuck into your luggage.', image: image11 },
    { date: 'July 01, 2023', description: 'A picture of you in Seattle, I wish I was there with you sooooo badddd.', image: image12 },
    { date: 'July 26, 2023', description: 'When we went to try on glasses at Gentle Monster and you looked super cutie.', image: image13 },
    { date: 'August 05, 2023', description: 'When we went to the Huntington Museum for our 6 months date (You are so beautiful omg).', image: image14 },
    { date: 'August 10, 2023', description: 'When we got dinner with your family for your 21st birthday. I love this picture so much.', image: image15 },
    { date: 'September 14, 2023', description: 'When we went to the science museum, the lighting here was soooooo goood and you look sooooooo ahem HOT ahem like OMG!', image: image17 },
    { date: 'October 03, 2023', description: 'When we were sitting outside on campus and the lighting was soo good and you look like a goddess.', image: image18 },
    { date: 'October 16, 2023', description: 'This picture of you is soooo cutieeee I love everything about it.', image: image19 },
    { date: 'October 21, 2023', description: 'When we went to carve pumpkins and you literally won because you are literally so good like yea that is MY girlfriend.', image: image20 },
    { date: 'November 10, 2023', description: 'When we went on our 9 months date even though we didn\'t get to spend that much time together on this day I treasure it and it was the best everrrr.', image: image21 },
    { date: 'November 14, 2023', description: 'We go to Gentle Monster a lot LOL. Butttt this picture you took of us is literally sooooooo amazing like I LOVE YOU JODIE.', image: image22 },
    { date: 'November 18, 2023', description: 'OMG When we were walking to costco and I took this picture of you L I K E O M G yo are soooooo beautiful.', image: image23 },
    { date: 'December 09, 2023', description: 'When we went on a date at mini golfing and you won because you are so good like omg Im dating a golf pro, also, you are so CUTE!', image: image24 },
    { date: 'December 13, 2023', description: 'When we were building gingerbread houses and your house was literally sooooo good like are you like a ginger bread construction worker or something you cutie.', image: image25 },
    { date: 'December 22, 2023', description: 'When we went to go ice skating and I did sooooo bad it was embarassing LOL but like you were so pro at this like how are you so pretty.', image: image26 },
    { date: 'December 26, 2023', description: 'CHRISTMASSSSS!!! We did christmas together!!! I love this picture and I love the way you got super excited when you opened your slime :)', image: image27 },
    { date: 'January 02, 2024', description: 'I REALLLYYYY LIKEE THIS PICTUREEEE Like you look soooooo prettyyyyyyy my heart is melting.', image: image28 },
    { date: 'January 02, 2024', description: 'YOUUUU AREE SOOOO PRETTYYYY this is another picture from when we went to San Diego over winter break.', image: image29 },
    { date: 'January 11, 2024', description: 'I took this picture when you were laying in my lap and you didn\'t know but like its suuuuuuucchhhhh a nice picture because you look sooooooo pretty.', image: image30 },
    { date: 'January 26, 2024', description: 'This is a random picture but I though it was funny and you look so cute hehehe.', image: image31 },
    { date: 'February 05, 2024', description: 'When I asked you to be my valentines, and you said YESSSSSS HEHEHEHEHEHEHEHEHE. I LOVE YOUUUUUUU!!!', image: image32 },

];

export default objects