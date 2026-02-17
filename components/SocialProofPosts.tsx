export default function SocialProofPosts() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Grateful quote banner */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-yellow-100 border border-yellow-200 rounded-xl px-8 py-4">
            <p className="text-lg md:text-xl font-semibold text-yellow-900 italic">
              &ldquo;So I&rsquo;m feeling super grateful.&rdquo;
            </p>
          </div>
        </div>

        {/* Masonry grid - 2 columns on desktop */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {/* Card 1 - Elke Calewaert */}
          <div className="break-inside-avoid bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-sm text-gray-900">Elke Calewaert</p>
                <p className="text-xs text-gray-500 leading-tight">
                  1st
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              You know, this week was to me exactly what I needed on the very
              moment I needed it. This week was truly life-changing to me; it has
              given me the self confidence I needed most to run my business,
              insights from the whole group, an amazing new network of FANTASTIC
              people, good laughs, new learnings on facilitation, running a
              business and so much MORE! Thank you so very much to all of you in
              AJ&amp;Smart and to the whole group!
            </p>
            {/* Photo thumbnails */}
            <div className="flex gap-1 mt-4">
              <div className="w-20 h-20 rounded-md bg-gray-200" />
              <div className="w-20 h-20 rounded-md bg-gray-200" />
              <div className="w-20 h-20 rounded-md bg-gray-200" />
            </div>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs">&#128077;&#10084;&#65039;</span>
              <span className="text-xs text-gray-500">24</span>
            </div>
          </div>

          {/* Card 2 - Mimi Garcia */}
          <div className="break-inside-avoid bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-sm text-gray-900">Mimi Garcia</p>
                  <svg
                    className="w-4 h-4 text-[#0a66c2] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 leading-tight">
                  Helping mission-driven teams clarify vision, align strategy...
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Starting this final day of Full Stack Facilitator training with
              AJ&amp;Smart and I can&rsquo;t even begin to pull together the things
              I&rsquo;ve learned this week. I&rsquo;ve been a facilitator and trainer in
              some capacity for more than 15 years. Here is what I&rsquo;ve been
              learning this week: 1) optimism is key to running effective
              collaboration sessions 2) there is always more to learn, no matter
              how long you&rsquo;ve been doing it. 3) learning your own style takes
              time but is worth it 4) investing in your own skills and
              development is the best investment you can make.
            </p>
            <p className="text-sm text-gray-800 mt-2">
              Now on to the final day!
            </p>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs">&#128077;&#128079;</span>
              <span className="text-xs text-gray-500">38</span>
              <span className="ml-auto text-xs text-gray-500">4 comments</span>
            </div>
          </div>

          {/* Card 3 - Drew Valencia Yan */}
          <div className="break-inside-avoid bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-sm text-gray-900">
                    Drew Valencia Yan
                  </p>
                  <svg
                    className="w-4 h-4 text-[#0a66c2] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 leading-tight">
                  Designops @ Netflix &middot; Certified full-stack facilitator
                </p>
                <p className="text-xs text-gray-400">2nd</p>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Over the last six months, I had the privilege of working closely
              with the incredible AJ&amp;Smart team to bring their full-stack
              facilitation training to Netflix. Last October, I attended the
              training at their Berlin office (to feel the material and see how it
              could apply to people at Grammarly), and...
            </p>
            <button className="text-sm font-medium text-[#0a66c2] mt-1 hover:underline">
              ...see more
            </button>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs">&#128077;&#10084;&#65039;&#128161;</span>
              <span className="text-xs text-gray-500">112</span>
              <span className="ml-auto text-xs text-gray-500">
                18 comments
              </span>
            </div>
          </div>

          {/* Card 4 - David Hefendehl */}
          <div className="break-inside-avoid bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-sm text-gray-900">
                  David Hefendehl
                </p>
                <p className="text-xs text-gray-500 leading-tight">1st</p>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Today marked the end of a 5 day intensive, immersive, emergent
              collaboration facilitation training at AJ&amp;Smart the &ldquo;Full Stack{" "}
              <span className="text-[#0a66c2]">#facilitator</span>&rdquo;
              It&rsquo;s been an eye opening inspiring session with some excellent
              tutoring by the lovely people from AJ&amp;Smart. Hands down the
              best in-person{" "}
              <span className="text-[#0a66c2]">#training</span> I have done in
              my professional live so far.
            </p>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs">&#128077;</span>
              <span className="text-xs text-gray-500">15</span>
              <span className="ml-auto text-xs text-gray-500">2 comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
