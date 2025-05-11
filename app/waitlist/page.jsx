'use client';

import Script from 'next/script';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#061525] text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Join the Waitlist</h1>
      <p className="mb-6 text-gray-300 text-center max-w-xl">
        Be among the first to meet Jules and explore the future of reflective AI.
      </p>

      <div className="bg-white text-black rounded-lg p-6 w-full max-w-2xl">
        <div id="crmWebToEntityFormContainer"></div>
      </div>

      <Script id="zoho-form-script" strategy="lazyOnload">
        {`
          const container = document.getElementById('crmWebToEntityFormContainer');
          container.innerHTML = \`
            <form id='webform6780794000000561265' name='WebToLeads6780794000000561265'>
              <input type='hidden' name='xnQsjsdp' value='bdf082ec05a5a677054e2fbc57710f266be4ff748b9fb1fb1fa82d8f65f16866'>
              <input type='hidden' name='zc_gad' id='zc_gad' value=''>
              <input type='hidden' name='xmIwtLD' value='14d40509ad5b14df69c8375cadac80ae176af32c6a21422663533a6de5f546d492cde3263f12bbf521d92ffc1a90b399'>
              <input type='hidden' name='actionType' value='TGVhZHM='>
              <input type='hidden' name='returnURL' value='null'>

              <label class='block mb-2 font-semibold'>Full Name *</label>
              <input name='Last Name' required type='text' class='w-full p-2 border border-gray-300 rounded mb-4' />

              <label class='block mb-2 font-semibold'>Email *</label>
              <input name='Email' required type='email' class='w-full p-2 border border-gray-300 rounded mb-4' />

              <label class='block mb-2 font-semibold'>Company</label>
              <input name='Company' type='text' class='w-full p-2 border border-gray-300 rounded mb-4' />

              <label class='block mb-2 font-semibold'>What are you hoping to build?</label>
              <textarea name='Description' class='w-full p-2 border border-gray-300 rounded mb-6'></textarea>

              <button type='submit' class='bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500'>
                Submit
              </button>
            </form>

            <script>
              document.getElementById('webform6780794000000561265').onsubmit = function(e) {
                e.preventDefault();
                const formData = new FormData(this);
                fetch('https://crm.zoho.com/crm/WebToLeadForm', {
                  method: 'POST',
                  body: formData,
                })
                .then(() => {
                  alert('Thanks for joining the waitlist!');
                  this.reset();
                })
                .catch(() => alert('Something went wrong. Please try again.'));
              };
            </script>
          \`;
        `}
      </Script>
    </div>
  );
}
