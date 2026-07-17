import React from 'react';

class TestimonialItem extends React.Component {
    //create constructor
    constructor(props)
    {
        super(props);

        //create property variables
        this.photo = props.photo;
        this.name = props.name;
        this.date = props.date;
        this.review = props.review;
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="testimonial-card">
                    <i className="fa-solid fa-quote-right testimonial-quote-icon" />

                    <div className="testimonial-rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>

                    <p className="testimonial-text">
                        "{this.review}"
                    </p>

                    <div className="testimonial-user">
                        <img 
                            src={this.photo} 
                            alt={this.name} 
                            className="testimonial-avatar" 
                        />

                        <div className="testimonial-info">
                            <h5>{this.name}</h5>
                            <span>Reviewed on: {this.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials" className="section-padding">
                <div className="container">

                    <div className="section-title-wrapper">
                        <span className="section-subtitle">Guest Feedbacks</span>
                        <h2 className="section-main-title">
                            Testimonials <i className="fa-solid fa-star-half-stroke" />
                        </h2>
                    </div>

                    <div className="row g-4">

                        <TestimonialItem
                            photo="9.jpg"
                            name="Oza Subir"
                            date="October 14, 2023"
                            review="Tried dal fry jeera rice, it's my first time at here. Food was good, quality and quantity both are perfect. Yet other dishes are pending to try. But just on dal fry i can bet food will be good. Staff is very humble, and friendly."
                        />

                        <TestimonialItem
                            photo="13.jpg"
                            name="Ketan Makwana"
                            date="December 9, 2023"
                            review="Shriji's has been epitome for quality food since years. Service and Hospitality being their best motto too. In the prevailing situation, Shriji's take utmost care from preparations to packaging and deliver food with all safety measures required."
                        />

                        <TestimonialItem
                            photo="10.jpg"
                            name="Falgun M. Shah"
                            date="January 22, 2024"
                            review="Simply Best In Bhavnagar. No matter whether it's a Family Get Together, Social Get Together, Birthday Party, Casual Group Gathering. It is always excellent for all."
                        />

                        <TestimonialItem
                            photo="12.jpg"
                            name="Urvi K."
                            date="March 5, 2024"
                            review="Had been to Shriji’s for the 5th time and every time it's a memorable time. The food service ambience and the location is so perfect that u can't miss it."
                        />

                    </div>

                </div>
            </section>
        );
    }
}

export default Testimonials;