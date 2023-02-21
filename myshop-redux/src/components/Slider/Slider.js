import { sliderActions } from '../../features/slices/slider-slice';
import { useDispatch, useSelector } from 'react-redux';
import { sliderData } from '../../assets/data/dummyData'

const Slider = () => {
	const dispatch = useDispatch();
	const slider = useSelector((state) => state.slider);

	function nextButtonHandler() {
		const currentSlideIndex = slider.value;
		dispatch(sliderActions.nextSlide(currentSlideIndex + 1));
	}

	function prevButtonHandler() {
		const currentSlideIndex = slider.value;
		dispatch(sliderActions.prevSlide(currentSlideIndex - 1));
	}

	return <div className='relative'>
		<div>
			{sliderData.map((item, index) => {
				return (
					<div key={item.id}
						className={parseInt(item.id) === slider.value
							? "relative opacity-100 duration-500 ease-in-out scale-100"
							: "relative opacity-0 hidden"}>
						<img
							src={item.img}
							alt={`slide-img-${item.id}`}
						/>
						<p className="absolute top-0 text-white">{item.text}</p>
					</div>);
			})}
		</div>
		<button onClick={nextButtonHandler}>Next</button>
		<button onClick={prevButtonHandler}>Prev</button>
	</div>
}

export default Slider;