import React from 'react'
import "./Notifications.css"
import Notification from '../notification/Notification'

export const notification = [
    {
        sender: "CNA",
        date: "1 min",
        subject: "Submit Your Rresume for Review",
        body: `How different your Resume is defines your value for the employer. It is always important to submit your
        resume for review. Maximum number of days for feedback should be 5 days.    `
    },
    {
        sender: "Career Service",
        date: "20 mins",
        subject: "Submit Your Resume to the CNA Platform",
        body: `It is advisable to create generate your resume and have it reviewed by others.
        The CNA is at your service. Kindly submit your resume to the platform for a review. `
    },
    {
        sender: "Career Service",
        date: "yesterday",
        subject: "Get your Resume",
        body: `How different your Resume is defines your value for the employer. It is always important to submit your
        resume for review. Maximum number of days for feedback should be 5 days.    `
    },
    {
        sender: "Selasi",
        date: "22nd Nov. 2021",
        subject: "The CNA Platform is Alive",
        body: `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
        nisi  illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia`
    },
    {
        sender: "Career Service",
        date: "3rd Nov. 2021",
        subject: "Submit Your Rresume for Review",
        body: `Sed ut perspiciatis unde omnis iste natus 
        error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
         magni dolores eos qui ratione voluptatem sequi nesciunt.`
    },
    
]

const Notifications = () => {
    return (
        <div className="all-notifications">
            <div id = "header">Notifications</div>
            {notification.map( (part) => (
                <Notification
                    time={part.date}
                    sender={part.sender}
                    subject={part.subject}
                    body = {part.body}
                />
            )
            )}
        </div>
    )
}

export default Notifications
