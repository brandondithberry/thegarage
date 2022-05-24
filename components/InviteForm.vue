<template>
  <div class="flex w-full text-left mx-auto mt-2">
    <form
      netlify
      netlify-honeypot
      name="invitation"
      method="POST"
      action="/success"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="invitation" />
      <div class="grid grid-cols-2 gap-4">
        <label for="firstname"
          >First name <input id="firstname" type="text" name="firstname"
        /></label>
        <label for="lastname"
          >Last Name <input id="lastname" type="text" name="lastname"
        /></label>
      </div>
      <label for="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label for="company">Company</label>
      <input id="company" type="text" name="company" required />
      <h4 class="mt-4">
        We will require all attendees to show proof of vaccination or be tested
        on the day of the event.
      </h4>
      <label
        ><input id="yes" type="radio" name="vaccinated" value="Yes" /> Yes, I am
        fully vaccinated.</label
      >
      <label
        ><input id="no" type="radio" name="vaccinated" value="No" /> No, I am
        not fully vaccinated.</label
      >
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>