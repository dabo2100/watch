

export default function star() {
    return (
        <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
        </div>
    )
}
