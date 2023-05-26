import invite_friend from "./assets/invite_friend.svg";
import wallet from "./assets/wallet.svg";
import offer from "./assets/offer.svg";
import rupee from "./assets/rupee.svg";
import tag from "./assets/tag.svg";

export const enrolledData = [
    {
        name: "Dhiraj Saxsena",
        date: "14 Sep, 2022",
        courseEnrolledList: [
            "UI/UX",
            "Photoshop",
            "Illustrator",
            "Python",
            "MERN",
            "Java",
        ],
        referralAmount: "185",
    },

    {
        name: "Subhash Mishra",
        date: "15 Sep, 2022",
        courseEnrolledList: [
            "UI/UX",
            "Photoshop",
            "Illustrator",
            "Python",
            "MERN",
            "Java",
            "C++",
        ],
        referralAmount: "185",
    },
    {
        name: "Subhash Mishra",
        date: "15 Sep, 2022",
        courseEnrolledList: [
            "UI/UX",
            "Photoshop",
            "Illustrator",
            "Python",
            "MERN",
            "Java",
            "C++",
        ],
        referralAmount: "485",
    },
    {
        name: "Subhash Mishra",
        date: "15 Sep, 2022",
        courseEnrolledList: [
            "UI/UX",
            "Photoshop",
            "Illustrator",
            "Python",
            "MERN",
            "Java",
            "C++",
        ],
        referralAmount: "485",
    },
];

export const inviteFriend = [
    {
        title: "Invite your Friends",
        subtitle: "Share the link tutedude.com with your friends",
        logo: invite_friend,
    },
    {
        title: "Friend purchases any course",
        subtitle: "Using your REFERRAL CODE in the payments page",
        logo: tag,
    },
    {
        title: "You get ₹ 200 as referral money",
        subtitle: "On total purchase the friend makes, into your wallet",
        logo: rupee,
    },
    {
        title: "Your Friend gets ₹ 200 Off ",
        subtitle:
            "On his overall fee on successful purchase using your referral code ",
        logo: offer,
    },
    {
        title: "Transfer money from wallet",
        subtitle:
            "When the wallet balance reaches ₹200 or more, you can withdraw it",
        logo: wallet,
    },
];

export default { enrolledData, enrolledData };
