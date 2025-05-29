class ShareBtn {
    constructor() {
        this.btn = document.querySelector(".share-icon");
        this.socialMedia = document.querySelector(".social-media");
        this.profile = document.querySelector(".profile");
        this.share = document.querySelector(".share");
        this.shareBox = document.querySelector(".share-box");
        this.init();
        this.btnClick();
    }
    
    isDesktop() {
        return window.matchMedia('(min-width: 50rem)').matches;
    }

    init() {
        window.addEventListener("resize", _ => {
        if(!this.isDesktop()) {
            this.profile.classList.remove("displayN");
            this.share.classList.remove("share-mobile");
            this.socialMedia.classList.remove("display");
            this.shareBox.classList.remove("width-full");
        }
        else {
            this.socialMedia.classList.remove("display");
        }
        })
    }

    btnClick() {
        this.btn.addEventListener("click", _ => {
            if(this.isDesktop()) {
                this.socialMedia.classList.toggle("display");
            }
            else {
                this.profile.classList.toggle("displayN");
                this.share.classList.toggle("share-mobile");
                this.socialMedia.classList.toggle("display");
                this.shareBox.classList.toggle("width-full");
            }
        })

        if(this.isDesktop()) {
            document.addEventListener("click", (e) => {
                if(!this.btn.contains(e.target) && !this.socialMedia.contains(e.target) )
                    this.socialMedia.classList.remove("display");
            });
        }   
    }
}

// main
mybtn = new ShareBtn;