'use client';

import Link from 'next/link';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-cloud-dancer/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-ink font-semibold text-xl tracking-tight">
            DigitalEgo
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/research" className="text-hematite hover:text-ink transition-colors text-sm">
              Research
            </Link>
            <Link href="/articles" className="text-hematite hover:text-ink transition-colors text-sm">
              Articles
            </Link>
            <Link href="/about" className="text-hematite hover:text-ink transition-colors text-sm">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-center">
            Newsletter
          </h1>
          <p className="text-hematite text-center text-lg mb-12">
            Research updates, product launches, no spam.
          </p>

          <div className="card p-8">
            <div
              id="crmWebToEntityForm"
              dangerouslySetInnerHTML={{
                __html: `
                  <form id='webform6780794000000588207' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6780794000000588207' method='POST' accept-charset='UTF-8'>
                    <input type='hidden' name='xnQsjsdp' value='1085fcae38eed5d990817ff8015eeba11506939cc1ece7a6396a2c682796417f' />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input type='hidden' name='xmIwtLD' value='cf93d28581d396b72bad0b8cd6b47b08e247ed240343f1494d3adff4d3cc34ad95c6c7dbd5f68c1d8999a8be6f85a3a6' />
                    <input type='hidden' name='actionType' value='TGVhZHM=' />
                    <input type='hidden' name='returnURL' value='https://digitalego.ai/thank-you' />

                    <label class='block mb-2 text-sm font-medium text-ink'>First Name *</label>
                    <input name='First Name' required type='text' class='w-full p-3 border border-hematite/20 rounded-lg mb-4 bg-cloud-dancer focus:border-baltic-sea focus:outline-none transition-colors' />

                    <label class='block mb-2 text-sm font-medium text-ink'>Last Name *</label>
                    <input name='Last Name' required type='text' class='w-full p-3 border border-hematite/20 rounded-lg mb-4 bg-cloud-dancer focus:border-baltic-sea focus:outline-none transition-colors' />

                    <label class='block mb-2 text-sm font-medium text-ink'>Email *</label>
                    <input name='Email' required type='email' class='w-full p-3 border border-hematite/20 rounded-lg mb-4 bg-cloud-dancer focus:border-baltic-sea focus:outline-none transition-colors' />

                    <label class='block mb-2 text-sm font-medium text-ink'>Company</label>
                    <input name='Company' type='text' class='w-full p-3 border border-hematite/20 rounded-lg mb-4 bg-cloud-dancer focus:border-baltic-sea focus:outline-none transition-colors' />

                    <label class='block mb-2 text-sm font-medium text-ink'>What would you like to build?</label>
                    <textarea name='Description' rows='4' class='w-full p-3 border border-hematite/20 rounded-lg mb-6 bg-cloud-dancer focus:border-baltic-sea focus:outline-none transition-colors resize-none'></textarea>

                    <button type='submit' class='w-full bg-ink text-cloud-dancer py-3 px-6 rounded-full font-medium hover:bg-hematite transition-colors'>
                      Subscribe
                    </button>
                  </form>
                `,
              }}
            />
          </div>

          <p className="text-center text-hematite/60 text-sm mt-8">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
