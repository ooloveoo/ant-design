import PropTypes from '../../_util/vue-types'

const defaultProps = {
  accessibility: PropTypes.bool.def(true),
  // 自定义高度
  adaptiveHeight: PropTypes.bool.def(false),
  afterChange: PropTypes.any.def(null),
  // appendDots: PropTypes.func.def((h, { dots }) => {
  //   return <ul style={{ display: 'block' }}>{dots}</ul>
  // }),
  arrows: PropTypes.bool.def(true),
  autoplay: PropTypes.bool.def(false),
  autoplaySpeed: PropTypes.number.def(3000),
  beforeChange: PropTypes.any.def(null),
  centerMode: PropTypes.bool.def(false),
  centerPadding: PropTypes.string.def('50px'),
  // className: '',
  cssEase: PropTypes.string.def('ease'),
  // customPaging: PropTypes.func.def((h, { i }) => {
  //   return <button>{i + 1}</button>
  // }),
  dots: PropTypes.bool.def(false),
  dotsClass: PropTypes.string.def('slick-dots'),
  draggable: PropTypes.bool.def(true),
  unslick: PropTypes.bool.def(false),
  easing: PropTypes.string.def('linear'),
  edgeFriction: PropTypes.number.def(0.35),
  fade: PropTypes.bool.def(false),
  focusOnSelect: PropTypes.bool.def(false),
  infinite: PropTypes.bool.def(true),
  initialSlide: PropTypes.number.def(0),
  lazyLoad: PropTypes.any.def(null),
  // nextArrow: PropTypes.any.def(null),
  verticalSwiping: PropTypes.bool.def(false),
  asNavFor: PropTypes.any.def(null),
  // onEdge: null,
  // onInit: null,
  // onLazyLoadError: null,
  // onReInit: null,
  // 圆点hover是否暂停
  pauseOnDotsHover: PropTypes.bool.def(false),
  // focus是否暂停
  pauseOnFocus: PropTypes.bool.def(false),
  // hover是否暂停
  pauseOnHover: PropTypes.bool.def(true),
  // prevArrow: PropTypes.any.def(null),
  responsive: PropTypes.any.def(null),
  rows: PropTypes.number.def(1),
  rtl: PropTypes.bool.def(false),
  slide: PropTypes.string.def('div'),
  slidesPerRow: PropTypes.number.def(1),
  slidesToScroll: PropTypes.number.def(1),
  slidesToShow: PropTypes.number.def(1),
  speed: PropTypes.number.def(500),
  swipe: PropTypes.bool.def(true),
  swipeEvent: PropTypes.any.def(null),
  swipeToSlide: PropTypes.bool.def(false),
  touchMove: PropTypes.bool.def(true),
  touchThreshold: PropTypes.number.def(5),
  useCSS: PropTypes.bool.def(true),
  useTransform: PropTypes.bool.def(true),
  variableWidth: PropTypes.bool.def(false),
  vertical: PropTypes.bool.def(false),
  waitForAnimate: PropTypes.bool.def(true),
  children: PropTypes.array,
  __propsSymbol__: PropTypes.any,
}

export default defaultProps
