import React, { Component } from 'react'

export class NewsItem extends Component {
    formatDateLocal(isoString) {
        const date = new Date(isoString);
        const pad = (n) => String(n).padStart(2, "0");

        let hours = date.getHours();
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()} ${pad(hours)}:${minutes}:${seconds} ${ampm}`;
    }

    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card position-relative">
                    <span className="position-absolute top-0 end-0 badge bg-danger">
                        {source ? source : "Unknown"}
                    </span>

                    <img
                        src={imageurl ? imageurl : "https://cdn.motor1.com/images/mgl/9meRb1/s1/rm026_077fn.jpg"}
                        width="215px"
                        height="215px"
                        className="card-img-top"
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title && title.length > 48 ? title.slice(0, 48) + "..." : title}
                        </h5>
                        <p className="card-text">
                            {description && description.length > 68 ? description.slice(0, 68) + "..." : description}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author ? author : "Unknown"} on {this.formatDateLocal(date)}
                            </small>
                        </p>
                        <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem
