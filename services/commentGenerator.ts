
import { Comment } from '../types';

const FAN_NAMES = [
  'fruityloop77', 'jacobharper_18', 'im_cash', 'wavyydavyy', 'a.montmagic',
  'nflburnaa', 'isaachawkins4', 'joehasmemes', 'cheeky_clapp3r', 'cormomusic',
  'shane_bryant', 'mikkel_flassen', 'faze_poopstick', 'ryder741', 'markymark923',
  'theboxer_drew', 'natur.3', 'iamlifty', 'jaden_ed', 'tom_beslity'
];

const MESSAGES = [
  "IM YOUR BIGGEST FAN!!",
  "Hey there sexy!",
  "I hope your day is as nice as your face!",
  "Have you been working out?",
  "The Force is strong with you",
  "I'm lucky to be your mirror!",
  "If I could high five you... I would!",
  "Greetings, Steve!",
  "There is no spoon...",
  "Hi there, Steve!",
  "Temet Nosce",
  "Welcome to the desert of the real",
  "Hello Steve!",
  "You're making me blush!",
  "I appreciate your support!",
  "I'm here for the entertainment!",
  "Let's get this party started!",
  "Just chilling, watching your live stream!",
  "Can't wait to see your next move!",
  "Strangers all wanna sit next to you on the bus",
  "Wait, what's happening!",
  "Waiting to see what you have in store for us!",
  "Ready for some fun!",
  "I could just hang here all day!",
  "I need some time to reflect...",
  "I see a lot of myself in you",
  "Damn, You're looking good!",
  "Yes, you are the fairest of them all",
  "May the Force be with you",
  "Alpha King, my dude! What's the scoop?",
  "I carried a watermelon",
  "Never underestimate the power of denial",
  "You gotta hold the frame",
  "Your smile is contagious",
  "You're a smart cookie",
  "I bet you make babies smile",
  "You light up the room",
  "You deserve a hug right now",
  "You're even more beautiful on the inside than you are on the outside",
  "I LOVE YOUUUUUUUUUUUUU",
  "Is it your biggest fan?",
  "Is it your best friend?",
  "Is it a surprise guest?",
  "Is it Santa Claus?",
  "Sure! Let's play Nemo!",
  "You've got a great sense of humor",
  "You've got all the right moves!",
  "You're all that and a super-size bag of chips",
  "A Boogie is so talented! I love his flow.",
  "I didn't know A Boogie was a rapper. I'll have to check out his music.",
  "On a scale from 1 to 10, you're an 15!",
  "Being awesome is hard, but you'll manage",
  "80% of motorcycle gangs think you'd be a delightful sidecar",
  "Everyone at the laundromat thinks you have the cutest underwear",
  "People behind you at movies think you are the perfect height",
  "Your parents argue over which one of them you look like more",
  "You're the most perfect you there is",
  "Your perspective is refreshing",
  "You're an awesome friend"
];

export const generateRandomComment = (): Comment => {
  const username = FAN_NAMES[Math.floor(Math.random() * FAN_NAMES.length)];
  const text = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  const id = Math.random().toString(36).substr(2, 9);
  const profilePic = `https://picsum.photos/seed/${username}/100/100`;
  
  return {
    id,
    username,
    text,
    profilePic,
    isVerified: Math.random() > 0.95
  };
};
