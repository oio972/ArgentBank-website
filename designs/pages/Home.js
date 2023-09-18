import React from 'react';
import Item from '../components/item';
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

const Home = () => {
    return (
        <main>
            <div classNameName='hero'>
                <section classNameName='hero-content'>
                    <h2 classNameName="sr-only">Promoted Content</h2>
                    <p classNameName="subtitle">No fees.</p>
                    <p classNameName="subtitle">No minimum deposit.</p>
                    <p classNameName="subtitle">High interest rates.</p>
                    <p classNameName="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section classNameName='features'>
                <h2 className="sr-only">Features</h2>
                <Item
                    icon={iconChat}
                    alt="Chat Icon"
                    title="You are our #1 priority"
                    content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <h3 className="feature-item-title">You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
                <Item
                    icon={iconMoney}
                    alt="Chat Icon"
                    title="More savings means higher rates"
                    content="The more you save with us, the higher your interest rate will be!"
                />
                <h3 classNameName="feature-item-title">More savings means higher rates</h3>
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            <div classNameName="feature-item">
                <Item
                    icon={iconSecurity}
                    alt="Chat Icon"
                    title="Security you can trust"
                    content="We use top of the line encryption to make sure your data and money is always safe."
                />
                <h3 classNameName="feature-item-title">Security you can trust</h3>
                <p>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </p>
            </div>
        </section>
        </main >
    )
}
export default Home