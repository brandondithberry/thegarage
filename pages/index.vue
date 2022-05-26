<template>
  <main>
    <section
      v-if="welcome"
      id="welcome"
      :class="{ active: isAddClass, init: isInitClass }"
    >
      <div class="vl vl-1">
        <span class="vl-load" :class="{ active: isAddClass }"></span>
      </div>
      <div class="vl vl-2">
        <span class="vl-load" :class="{ active: isAddClass }"></span>
      </div>
      <div class="vl vl-3">
        <span class="vl-load" :class="{ active: isAddClass }"></span>
      </div>
      <div class="center">
        <img class="inline" src="~/static/wordmark.png" width="240px" />
        <h1>Step Into Our <b>Metaverse</b></h1>
        <h2>JUNE 18, 2022</h2>
        <h3 class="lg:hidden">View on Desktop for the Best Experience</h3>
        <div class="btns">
          <button class="btn" @click="interactPage">INTERACT</button
          ><button class="btn" @click="invitePage">VIEW INVITE</button>
        </div>
      </div>
    </section>

    <section id="rsvp" class="content" v-if="invite">
      <button class="back" @click="closeInvite"><h2>← BACK</h2></button>
      <div class="container">
        <a href="https://the-garage.tv" target="_blank">
          <img class="inline" src="~/static/wordmark.png" width="180px" />
        </a>
        <h2>Step Into Our Metaverse</h2>
        <h1 class="mt-0"><b>Party RSVP</b></h1>
        <p class="md:text-lg">
          Join hundreds of your friends and colleagues for a night of food,
          drinks, creative performances, robot light shows, dancing, digital art
          pieces, 3D scanning booths, and so much more as we explore the future
          together.
        </p>
        <h4>
          THE GARAGE<br>@ INDUSTRY CITY<br>86 34TH ST, BUILDING 6, 4TH FL<br>BROOKLYN, NY 11232<br>8:00 PM - 2:00AM<br>ATTIRE: METAVERSE CHIC
        </h4>
        <InviteForm />
        <FooterBlock />
      </div>
    </section>

    <section id="interact" class="content" v-if="interact">
      <h2 class="mouse hidden lg:block">MOVE MOUSE</h2>
      <button class="back" @click="closeInteract"><h2>← BACK</h2></button>
      <FooterBlock class="absolute bottom-0 left-0" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      welcome: true,
      interact: false,
      invite: false,
      isAddClass: false,
      isInitClass: false,
    }
  },
  methods: {
    interactPage() {
      this.isAddClass = true
      this.interact = true
      this.isInitClass = false
      setTimeout(() => (this.welcome = false), 4000)
    },
    invitePage() {
      this.isAddClass = true
      this.invite = true
      this.isInitClass = false
      setTimeout(() => (this.welcome = false), 4000)
    },
    closeInvite() {
      this.isAddClass = false
      this.isInitClass = true
      this.invite = false
      setTimeout(() => (this.welcome = true))
    },
    closeInteract() {
      this.isAddClass = false
      this.isInitClass = true
      this.interact = false
      setTimeout(() => (this.welcome = true))
    },
  },
}
</script>

<style lang="postcss" scoped>
#welcome {
  @apply fixed flex flex-col place-content-center place-items-center top-0 left-0 w-full h-full text-center;
  background: radial-gradient(#000, #061129);
  box-shadow: inset 0px -10px 100px #2b96c1;
  animation: glitch-clouds 10s linear alternate-reverse infinite;
  z-index: 3000;

  .vl {
    @apply fixed flex top-0 h-full;
    border-left: 1px solid #acf2fd44;
    z-index: 1;
    box-shadow: 0px 0px 30px 2px #acf2fd44;

    .vl-load {
      bottom: 0;
      height: 0;
      border-left: 2px solid #acf2fd;
      box-shadow: 0px 0px 30px 2px #acf2fd;
    }

    .vl-load.active {
      animation: loading 3s ease forwards;
    }
  }

  .vl-1 {
    left: 15%;
    animation: glitch-lines 7s linear forwards infinite;
  }

  .vl-2 {
    left: 50%;
    animation: glitch-lines 8s linear forwards infinite;
  }

  .vl-3 {
    left: 85%;
    animation: glitch-lines 9s linear forwards infinite;
  }

  .center {
    @apply flex flex-col place-content-center place-items-center w-3/4 h-3/4;
    overflow: hidden;
    opacity: 1;
    animation: glitch-text 10s linear forwards infinite;
    filter: drop-shadow(0px 0px 10px #fff);

    h1 {
      @apply uppercase;
      width: 100%;
      letter-spacing: 0.5rem;
      margin-top: 1.5rem;
    }
  }
}

#welcome.active {
  animation: closescreen 1s linear 3s forwards;
}

#welcome.init {
  animation: openscreen 1s ease forwards;
}

.content {
  @apply flex flex-col;
  box-shadow: inset 0px -10px 100px #2b96c1;
  animation: glitch-clouds 10s linear alternate-reverse infinite;


  .back {
    @apply fixed left-5 top-5 text-xl;
    z-index: 2000;
  }

  a {
    @apply block h-auto;
  }

  .container {
    @apply w-full mx-auto text-center;
    max-width: 500px;
    z-index: 1000;

    h4 {
      border: 1px solid #acf2fd;
      padding: 1rem;
    }
  }
}

#rsvp {
  @apply absolute w-full h-full top-0 left-0 overflow-x-hidden overflow-y-scroll p-10 lg:p-14;
  background: radial-gradient(#03001377, #00000077);
  z-index: 500;
}

#interact {
  .mouse {
    @apply fixed left-10 text-xl;
    z-index: 3000;
  }
}
</style>