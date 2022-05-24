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
      <label for="company">Company</label>
      <input id="company" type="text" name="company" required />
      <label><input id="yes" type="radio" name="vaccinated" value="Yes"> Yes, I am fully vaccinated.</label>
      <label><input id="no" type="radio" name="vaccinated" value="No"> No, I am not fully vaccinated.</label>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
.invite-form {
  @apply flex w-full text-left;
  margin: 1rem auto 0 auto;
}

.invite-form .btn {
  width: 100%;
}

.invite-form h4,
.invite-form input[type='text'],
.invite-form input[type='email'] {
  @apply inline w-full py-3;
}

.invite-form label {
  @apply text-lg block py-2 m-0;
}

.invite-form input[type='checkbox'] {
  @apply inline py-3;
}

.invite-form input[type='checkbox']:after {
  background: #0060a9;
}

.invite-form input[type='checkbox']:checked:before {
  background: #0060a9;
}

.invite-form input[type='text'],
.invite-form input[type='email'] {
  @apply border-primary border-2 p-2;
  box-shadow: 0px 0px 5px #0060a9, inset 0px 0px 5px #0060a9;
  background: #03001377;
  transition: all 0.4s ease;
  color: #fff;
}

.invite-form input[type='text']:focus,
.invite-form input[type='text']:focus-visible,
.invite-form input[type='text']:active,
.invite-form input[type='email']:focus,
.invite-form input[type='email']:focus-visible,
.invite-form input[type='email']:active {
  border-color: #acf2fd;
  box-shadow: 0px 0px 10px #acf2fd, inset 0px 0px 5px #acf2fd;
}

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
