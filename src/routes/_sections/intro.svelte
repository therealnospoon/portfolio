<style>
    .intro-wrapper {
        height: 100vh;
        max-width: 620px;
        display: flex;
        align-items: center;
        padding: 0 2.5rem;
    }
    .avatar {
        height:8rem;
        width: 8rem;
        border-radius: 50%;
        margin: auto;
    }
    .recent-work-btn {
        text-decoration: none;
        appearance: none;
        font-size: 1.7rem;
        margin-left: -.6rem;
        background: transparent;
        color: var(--color-primary);
        @media only screen and (min-width: 576px) {
            font-size: 2rem ;
        }
    }

    .hello-there {
       font-size: 3.5rem;
        @media only screen and (min-width: 576px) {
            font-size: 5rem ;
        }
    }

</style>

<div class="container intro-wrapper">
    <div class="row">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
            <img class="avatar" src="/images/profile_pic.jpg" alt="timothy kim"/>
            <div class="intro-text-wrapper">
                <h1 class="hello-there mt-5 mb-4">Hi, I'm Tim</h1>
                <h5>I'm a UI developer and designer from Seattle, WA. I like building enjoyable applications. <br><br></h5>
                <h5>See my <a href="#work" class="recent-work-btn button button-underline">Recent Work</a></h5>
            </div>
        </div>
    </div>
</div>

<script>

</script>