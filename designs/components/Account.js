function Account(props) {
    return (
        <section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 class="account-title">{props.title}</h3>
                    <p class="account-amount">{props.amount}</p>
                    <p class="account-amount-description">{props.description}</p>
                </div>
            </section>
        </section>
    )
}
export default Account