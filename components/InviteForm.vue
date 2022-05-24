<template>
  <div class="invite-form">
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
      <label for="firstname">First Name</label>
      <input id="firstname" type="text" name="firstname" />
      <label for="lastname">Last Name</label>
      <input id="lastname" type="text" name="lastname" />
      <label for="email">Email</label>
      <input id="email" type="email" name="email" required />
      <label><input id="yes" type="radio" name="vaccinated" value="Yes"> Yes, I am fully vaccinated.</label>
      <label><input id="no" type="radio" name="vaccinated" value="No"> No, I am not fully vaccinated.</label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
