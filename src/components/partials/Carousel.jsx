export default function Carousel() {
    return (
        <div id="foodCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://assets.bonappetit.com/photos/57acec251b3340441497533d/master/w_2700,h_1561,c_limit/ba-best-breakfast-sandwich.jpg" class="d-block w-100 carouselImage" alt="Sausage Breakfast Sandwich" />
                </div>
                <div class="carousel-item">
                    <img src="https://bakeitwithlove.com/wp-content/uploads/2021/09/breakfast-sandwich-sq.jpg" class="d-block w-100 carouselImage" alt="Three Breakfast Sandwiches" />
                </div>
                <div class="carousel-item">
                    <img src="https://kristineskitchenblog.com/wp-content/uploads/2023/02/breakfast-burrito-recipe-16.jpg" class="d-block w-100 carouselImage" alt="Breakfast burrito" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}