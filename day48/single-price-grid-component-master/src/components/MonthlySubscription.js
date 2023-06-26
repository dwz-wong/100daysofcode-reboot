export default function MonthlySubscription() {
    return (
        <div className="monthly-subscription__container">
            <h1 className="monthly-subscription__title">Monthly Subscription</h1>
            <p className="monthly-subscription__price">$29 <span>per month</span></p>
            <p className="monthly-subscription__description">Full access for less than $1 a day</p>
            <button type="button" className="monthly-subscription__sign-up-btn">Sign Up</button>
        </div>
    )
}