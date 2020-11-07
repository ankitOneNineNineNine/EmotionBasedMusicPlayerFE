const songs = [{
    title: 'Aankhein Milayenge Darr Se',
    artist: 'K. MOHAN,NEHA BHASIN',
    emotion: 'Fear',
    src: 'http://localhost:8000/music/Aankhein Milayenge Darr Se Video Song Neerja Sonam Kapoor Prasoon Joshi T-Series.mp3',
    img: 'http://localhost:8000/images/Aankhein Milayenge Darr Se.jpeg'
},
{
    title: 'Pachtaoge',
    artist: 'Arijit Singh',
    emotion: 'Sad',
    src: 'http://localhost:8000/music/Arijit Singh Pachtaoge Vicky Kaushal, Nora Fatehi Jaani, B Praak, Arvindr Khaira Bhushan K.mp3',
    img: 'http://localhost:8000/images/Pachtaoge.png'
}, {
    title: 'Bhaag D.K Bose',
    artist: 'Azee Jzee Music',
    emotion: 'Disgust',
    src: 'http://localhost:8000/music/Bhaag D.K Bose - Delhi Belly720p HD.mp3',
    img: 'http://localhost:8000/images/Bhaag DK Bose.jpg'
}, {
    title: 'Allare',
    artist: "Deepak Bajracharya",
    emotion: 'Happy',
    src: 'http://localhost:8000/music/Deepak Bajracharya - AllareNew Nepali Song.mp3',
    img: 'http://localhost:8000/images/Allare.jpg'
}, {
    title: 'Tu Hi Yaar Mera',
    artist: 'Rochak,Arijit Singh,Neha Kakkar',
    emotion: 'Neutral',
    src: 'http://localhost:8000/music/Full VideoTu Hi Yaar Mera Pati Patni Aur Woh Kartik A,Bhumi P,Ananya P Rochak,Arijit S,Neh.mp3',
    img: 'http://localhost:8000/images/Tu Hi Yaar Mera.png'
}, {
    title: 'Basket Case',
    artist: 'Green Day',
    emotion: 'Angry',
    src: 'http://localhost:8000/music/Green Day - Basket Case [Official Music Video].mp3',
    img: 'http://localhost:8000/images/Basket Case.jpg'
}, {
    title: 'Drops In the Ocean',
    artist: 'Hawk Nelson',
    emotion: 'Fear',
    src: 'http://localhost:8000/music/Hawk Nelson - Drops In the Ocean (Lyric Video).mp3',
    img: 'http://localhost:8000/images/Drops In the Ocean.jpg'
}, {
    title: 'Jaula Relaima',
    artist: 'Kamal Khatri,Simple Kharel',
    emotion: 'Neutral',
    src: 'http://localhost:8000/music/JAULA RELAIMA - Simpal KharelNew Nepali Song 2020Official Music Video ( FEMALE VERSION ).mp3',
    img: 'http://localhost:8000/images/Jaula Relaima.jfif'
}, {
    title: 'JEE KARDA',
    artist: 'Divya Kumar',
    emotion: 'Angry',
    src: 'http://localhost:8000/music/Jee Karda (Official Full Song) Badlapur Varun Dhawan & Yami Gautam.mp3',
    img: 'http://localhost:8000/images/JEE KARDA.jfif'
}, {
    title: 'Absence of fear',
    artist: 'Jewel',
    emotion: 'Fear',
    src: 'http://localhost:8000/music/JEWEL - Absence of fear (with Lyrics).mp3',
    img: 'http://localhost:8000/images/Absence of fear.jpg'
}, {
    title: 'Jumme Ki Raat',
    artist: 'Mika Singh,Palak Muchhal',
    emotion: 'Happy',
    src: 'http://localhost:8000/music/Jumme Ki Raat Full Video Song Salman Khan, Jacqueline Fernandez Mika Singh Himesh Reshammi.mp3',
    img: 'http://localhost:8000/images/Jumme Ki Raat.jpg'
}, {
    title: 'Lai Lai',
    artist: 'Ketan Chettri',
    emotion: 'Sad',
    src: 'http://localhost:8000/music/Lai Lai -Prasad Nepali Movie Lyrical Song Video Bipin Karki, Nischal Basnet, Namrata Shrest.mp3',
    img: 'http://localhost:8000/images/Lai Lai.jpg'
}, {
    title: 'Nothing Else Matters',
    artist: 'Metallica',
    emotion: 'Neutral',
    src: 'http://localhost:8000/music/Metallica Nothing Else Matters (Official Music Video).mp3',
    img: 'http://localhost:8000/images/Nothing Else Matters.jpg'
}, {
    title: 'Nacha Firiri',
    artist: 'Mahesh Kafle,Melina Rai',
    emotion: 'Happy',
    src: 'http://localhost:8000/music/NACHA FIRIRI Mahesh Kafle Ft. Melina Rai Nischal Basnet Swastima Khadka Kristal Klaw.mp3',
    img: 'http://localhost:8000/images/Nacha Firiri.gif'
}, {
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    emotion: 'Happy',
    src: 'http://localhost:8000/music/Official Clip from La La Land - John Legend - Start a Fire.mp3',
    img: 'http://localhost:8000/images/Start A Fire.jfif'
}, {
    title: 'Boneyards',
    artist: 'Parkway Drive',
    emotion: 'Disgust',
    src: 'http://localhost:8000/music/Parkway Drive - Boneyards.mp3',
    img: 'http://localhost:8000/images/Boneyards.jpg'
}, {
    title: 'Colors Of The Rainbow',
    artist: 'Sevenn,Kathy',
    emotion: 'Neutral',
    src: 'http://localhost:8000/music/Sevenn feat. Kathy - Colors Of The Rainbow.mp3',
    img: 'http://localhost:8000/images/Colors Of The Rainbow.jpg'
}, {
    title: 'Gala Pukka',
    artist: 'Sujan Chapagain',
    emotion: 'Surprise',
    src: 'http://localhost:8000/music/Sujan ChapagainGala Pukka - Ma Fakauchu Bhanera Hola[Official Lyrical Video].mp3',
    img: 'http://localhost:8000/images/Gala Pukka.jpg'
}, {
    title: 'Take Me To Your Heat',
    artist: 'Michael Learns To Rock',
    emotion: 'Happy',
    src: 'http://localhost:8000/music/Take me to your heart.mp3',
    img: 'http://localhost:8000/images/Take Me To Your Heat.jpg'
}, {
    title: 'Still Dont Seem To Care',
    artist: 'Talk In Tongues',
    emotion: 'Disgust',
    src: 'http://localhost:8000/music/Talk In Tongues - Still Dont Seem To Care (Official Video).mp3',
    img: 'http://localhost:8000/images/Still Dont Seem To Care.jpg'
}, {
    title: 'The Best Day',
    artist: 'Taylor Swift',
    emotion: 'Surprise',
    src: 'http://localhost:8000/music/Taylor Swift - The Best Day.mp3',
    img: 'http://localhost:8000/images/The Best Day.jpg'
}, {
    title: 'Wildest dreams',
    artist: 'Taylor Swift',
    emotion: 'Surprise',
    src: 'http://localhost:8000/music/Taylor Swift - Wildest Dreams.mp3',
    img: 'http://localhost:8000/images/Wildest dreams.jpg'
}, {
    title: 'VIRUS',
    artist: 'VIRUS-KUSHAL KHATRI',
    emotion: 'Angry',
    src: 'http://localhost:8000/music/VIRUS - MR NEPALINEW NEPALI RAP SONG- 2019KUSHAL KHATRI.mp3',
    img: 'http://localhost:8000/images/VIRUS.jpg'
}, {
    title: 'Broken',
    artist: 'Woren Webbe',
    emotion: 'Sad',
    src: 'http://localhost:8000/music/Woren Webbe - Broken Song New English Sad Love Song 2020 R&B 2020.mp3',
    img: 'http://localhost:8000/images/Broken.jpg'
}
]
export default songs;