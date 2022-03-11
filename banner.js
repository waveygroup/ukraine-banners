var UKRAINE = UKRAINE || (function(){
    var _args = {};

    return {
        init : function(Args) {
            _args = Args;
            const head = document.getElementsByTagName('HEAD')[0]
            const styleSheet = document.createElement('link')
            styleSheet.rel = 'stylesheet'
            styleSheet.type = 'text/css'
            styleSheet.href = 'ukraine.css'
            head.appendChild(styleSheet)
        },

        createBanner : function() {
            let ukraineBanner = document.createElement("div")
            ukraineBanner.classList.add('ukb')

            if (_args[0] === "dark") {
                ukraineBanner.classList.add('ukb-dark')
            } else {
                ukraineBanner.classList.add('ukb-light')
            }

            if (_args[1] === "emoji") {
                ukraineBanner.classList.add('ukb-small')
                let ukraineBannerContent = document.createTextNode("❤️ 🇺🇦")
                ukraineBanner.appendChild(ukraineBannerContent);
            }

            if (_args[1] === "hashtag") {
                ukraineBanner.classList.add('ukb-small')
                let ukraineBannerContent = document.createTextNode("#StandWithUkraine")
                ukraineBanner.appendChild(ukraineBannerContent);
            }

            if (_args[1] === "small") {
                ukraineBanner.classList.add('ukb-small')
                let ukraineBannerContent = document.createTextNode("We stand with 🇺🇦 Ukraine #StandWithUkraine")
                ukraineBanner.appendChild(ukraineBannerContent);
            }

            if (_args[1] === "large") {
                ukraineBanner.classList.add('ukb-large')
                let ukraineBannerContent = document.createTextNode("Russia's war against 🇺🇦 Ukraine is real and raw. Our hearts are with those who suffer.")
                ukraineBanner.appendChild(ukraineBannerContent);
            }

            if (_args[2] === "bottom-right") {
                ukraineBanner.classList.add('ukb-bottom-right')
            }

            if (_args[2] === "bottom-left") {
                ukraineBanner.classList.add('ukb-bottom-left')
            }

            if (_args[2] === "top-left") {
                ukraineBanner.classList.add('ukb-top-left')
            }

            if (_args[2] === "top-right") {
                ukraineBanner.classList.add('ukb-top-right')
            }

            document.body.appendChild(ukraineBanner)

            ukraineBanner.onclick = () => {
                window.location.href = 'https://supportukrainenow.org/'
            }
        }
    };
}());
