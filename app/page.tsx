import Image from "next/image"
export default function Home() {

  return (
    <div className="container mt-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-full md:w-5/12">
          <h1 className="text-4xl font-extrabold text-">Learn programming<br />for Free</h1>
          <p>Learn to program with our beginner-friendly tutorials and examples. <span className="text-blue-600">Read tutorials, try
            examples, write code</span> and learn to program.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex justify-center">
          <Image className="cover__artwork" title="Learn to code with Programiz" width="475" height={475} alt="Learn to code with edulab" src="/art.png" />
        </div>
      </div>



      <div className="d-flex justify-content-between-md justify-content-center align-items-center">
        <div className="align-self-start d-none d-xl-block highlight-course__col highlight-course__col--title pt-5x">
          <div className="d-flex flex-column justify-content-center">
            <h2>Choose what to learn</h2>
            <p>Start learning the best programming languages.</p>
          </div>
        </div>
        <div className="highlight-course__wrap">
          <a href="/python-programming" title="Learn Python - Python Tutorial for Beginners" className="highlight-course__col">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/python.svg" height={40} width={40}></object>
              </div>
              <h3>Python Programming</h3>
            </div>
          </a>

          <a href="/sql" title="Learn SQL - SQL Tutorial for Beginners" className="highlight-course__col">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/sql.svg"></object>
              </div>
              <h3>Learn SQL</h3>
            </div>
          </a>

          <a href="/r" title="Learn R - R Tutorial for Beginners" className="highlight-course__col">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/r.svg"></object>
              </div>
              <h3>R Programming</h3>
            </div>
          </a>

          <a href="/html" title="Learn HTML - HTML Tutorial for Beginners" className="highlight-course__col animateable-mobile">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/html.svg"></object>
              </div>
              <h3>Learn HTML</h3>
            </div>
          </a>

          <a href="/javascript" title="Learn Javascript: JavaScript Tutorial for Beginners" className="highlight-course__col highlight-course__desktop-course animateable-mobile">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/javascript.svg"></object>
              </div>
              <h3>JavaScript</h3>
            </div>
          </a>

          <a href="/java-programming" title="Learn Java: Java Tutorial for Beginners" className="highlight-course__col highlight-course__desktop-course animateable-mobile">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/java.svg"></object>
              </div>
              <h3>Java Programming</h3>
            </div>
          </a>

          <a href="/rust" title="Learn Rust - Rust Tutorial for Beginners" className="highlight-course__col animateable-mobile">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/rust.svg"></object>
              </div>
              <h3>Rust Programming</h3>
            </div>
          </a>

          <a href="/golang" title="Learn Go - Go Tutorial for Beginners" className="highlight-course__col animateable-mobile">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/go.svg"></object>
              </div>
              <h3>Go Programming</h3>
            </div>
          </a>

          <a href="/cpp-programming" title="Learn C++ - C++ Tutorial for Beginners" className="highlight-course__col animateable-mobile animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/c++.svg"></object>
              </div>
              <h3>C++ Programming</h3>
            </div>
          </a>

          <a href="/c-programming" title="Learn C - C Tutorial for Beginners" className="highlight-course__col animateable-mobile animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/c.svg"></object>
              </div>
              <h3>C Programming</h3>
            </div>
          </a>

          <a href="/dsa" title="Learn Data Structure &amp; Algorithms" className="highlight-course__col animateable-mobile animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/dsa.svg"></object>
              </div>
              <h3>DS &amp; Algorithms</h3>
            </div>
          </a>

          <a href="/swift-programming" title="Learn Swift: Swift Tutorial for Beginners" className="highlight-course__col animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/swift.svg"></object>
              </div>
              <h3>Swift Programming</h3>
            </div>
          </a>

          <a href="/csharp-programming" title="Learn C#: C# Tutorial for Beginners" className="highlight-course__col animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/csharp.svg"></object>
              </div>
              <h3>C# Programming</h3>
            </div>
          </a>

          <a href="/kotlin-programming" title="Learn Kotlin: Kotlin Tutorial for Beginners" className="highlight-course__col animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/all/themes/programiz/assets/kotlin.svg"></object>
              </div>
              <h3>Kotlin Programming</h3>
            </div>
          </a>

          <a href="/python-programming/numpy" title="Learn NumPy: NumPy Tutorial for Beginners" className="highlight-course__col animateable">
            <div className="card platform d-flex align-items-center">
              <div className="platform__icon">
                <object className="platform-icon__node" type="image/svg+xml" data="/sites/tutorial2program/files/NumPy.svg">
                </object></div>
              <h3>NumPy</h3>
            </div>
          </a>

          <div className="highlight-course__col highlight-course__col--link">
            <div className="card platform platform--course-nav d-none d-lg-flex">
              <a title="Browse all programming tutorials" href="#" className="platform__link">
                <span className="platform__link__label link platform--link">View all tutorials</span>
                <svg className="programiz-icon programiz-icon--small platform__link__icon">
                  {/* <use xlink: href="/sites/all/themes/programiz/assets/feather-sprite.svg#arrow-right"></use> */}
                </svg>
              </a>
            </div>
            <div className="card platform platform--course-nav d-lg-none">
              <a title="Browse all programming tutorials" href="#" className="platform__link">
                <span className="platform__link__label platform--link link">View all tutorials</span>
                <svg className="programiz-icon programiz-icon--small platform__link__icon">
                  {/* <use xlink: href="/sites/all/themes/programiz/assets/feather-sprite.svg#arrow-right"></use> */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="highlight-course__col highlight-course__col--link">
          <div className="card platform platform--course-nav d-none d-lg-flex">
            <a title="Browse all programming courses" href="#" className="platform__link">
              <span className="platform__link__label">View all<br /> courses</span>
              <svg className="programiz-icon programiz-icon--small platform__link__icon">
                {/* <use xlink: href="/sites/all/themes/programiz/assets/feather-sprite.svg#arrow-right" /> */}
              </svg>
            </a>
          </div>
          <a title="Browse all programming courses" href="#" className="platform__link d-flex d-lg-none">
            <span className="platform__link__label">View all courses</span>
            <svg className="programiz-icon programiz-icon--small platform__link__icon">
              {/* <use xlink: href="/sites/all/themes/programiz/assets/feather-sprite.svg#arrow-right" /> */}
            </svg>
          </a>
        </div>
      </div>
    </div>

  )
}