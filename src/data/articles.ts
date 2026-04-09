import articleClay from "@/assets/article-clay.jpg";
import articleRainbow from "@/assets/article-rainbow.jpg";
import articleMehndi from "@/assets/article-mehndi.jpg";
import articleChristmas from "@/assets/article-christmas.jpg";
import articleCrochet from "@/assets/article-crochet.jpg";
import articleVision from "@/assets/article-vision.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "easy-clay-craft-ideas-for-beginners",
    title: "25 Easy Clay Craft Ideas for Beginners",
    excerpt: "Discover adorable polymer clay projects perfect for first-timers. From miniature animals to decorative bowls, these beginner-friendly ideas will spark your creativity.",
    category: "Crafts",
    image: articleClay,
    date: "April 5, 2025",
    readTime: "8 min read",
    author: "Crafted Wizard",
    content: `<h2>Getting Started with Polymer Clay</h2>
<p>Polymer clay is one of the most versatile and forgiving craft materials out there. Whether you're a complete beginner or someone looking to try a new creative outlet, clay crafting offers endless possibilities for making beautiful, personalized pieces.</p>
<p>The best part? You don't need expensive tools or years of experience. Most of these projects can be completed with just your hands, a rolling pin, and a home oven for baking.</p>

<h2>Essential Supplies You'll Need</h2>
<p>Before diving into projects, gather these basics: polymer clay in assorted colors, a smooth work surface, a craft knife or blade, a rolling pin (or acrylic roller), and parchment paper for baking. Optional extras include cookie cutters, texture stamps, and acrylic paint for finishing touches.</p>

<h3>Top 5 Beginner Projects</h3>
<p><strong>1. Simple Beads:</strong> Roll small balls of clay, pierce them with a toothpick, and bake. String them together for custom jewelry that looks store-bought.</p>
<p><strong>2. Mini Planters:</strong> Shape small pinch pots to hold tiny succulents. Mix colors for a marbled effect that looks stunning on a windowsill.</p>
<p><strong>3. Fridge Magnets:</strong> Cut shapes using cookie cutters, add details with a toothpick, and glue a magnet to the back after baking.</p>
<p><strong>4. Earring Charms:</strong> Roll thin sheets, cut geometric shapes, and add earring hooks for trendy, lightweight accessories.</p>
<p><strong>5. Decorative Bowls:</strong> Drape a flat circle of clay over an oven-safe bowl and bake for a beautiful trinket dish.</p>

<h2>Tips for Perfect Results</h2>
<p>Always condition your clay by kneading it until it's soft and pliable. Work on a clean surface to avoid lint and dust. Bake at the temperature specified on the package — under-baking leads to brittle pieces, while over-baking can cause discoloration.</p>
<p>Don't be afraid to experiment with color mixing. Combining two colors partially creates gorgeous marbled effects that make every piece unique.</p>`
  },
  {
    id: "2",
    slug: "rainbow-dash-costume-at-home",
    title: "How to Make Rainbow Dash Costume at Home",
    excerpt: "Create an eye-catching Rainbow Dash costume using simple materials you probably already have. Perfect for Halloween, cosplay events, or dress-up fun!",
    category: "DIY",
    image: articleRainbow,
    date: "March 28, 2025",
    readTime: "10 min read",
    author: "Crafted Wizard",
    content: `<h2>Bringing Rainbow Dash to Life</h2>
<p>Rainbow Dash is one of the most beloved characters for costume lovers of all ages. The vibrant rainbow mane and tail, paired with those signature wings, make for a showstopping outfit that's surprisingly easy to DIY.</p>
<p>This step-by-step guide walks you through creating every element of the costume using affordable craft supplies and clever techniques.</p>

<h2>Materials List</h2>
<p>You'll need: a light blue t-shirt or dress, rainbow-colored tulle or fabric strips, craft foam sheets, hot glue gun, headband, elastic band, acrylic paint, and optional glitter for extra sparkle.</p>

<h3>Building the Rainbow Mane</h3>
<p>Cut strips of tulle in red, orange, yellow, green, blue, and purple. Attach them to a headband using loop knots, alternating colors. For extra volume, layer multiple strips of each color. The mane should cascade down one side for that signature Rainbow Dash look.</p>

<h3>Crafting the Wings</h3>
<p>Trace wing shapes onto large pieces of craft foam. Cut two matching pieces and paint them with light blue acrylic paint. Add feather details with a darker shade. Attach elastic straps to the back so they can be worn like a backpack.</p>

<h2>Final Assembly Tips</h2>
<p>Layer the rainbow tail strips and attach them to a belt or pin them to the back of the outfit. Add a lightning bolt cutout from yellow craft foam to complete the cutie mark. A little face paint on the cheeks ties everything together beautifully!</p>`
  },
  {
    id: "3",
    slug: "mehndi-designs-for-hands-2025",
    title: "50+ Mehndi Designs for Hands 2025",
    excerpt: "Explore stunning mehndi patterns from traditional bridal designs to modern minimalist styles. Step-by-step guides for every skill level.",
    category: "DIY",
    image: articleMehndi,
    date: "March 20, 2025",
    readTime: "12 min read",
    author: "Crafted Wizard",
    content: `<h2>The Art of Mehndi Design</h2>
<p>Mehndi, or henna art, has been a cherished tradition for centuries across many cultures. Today, it has evolved into a beautiful form of temporary body art that blends traditional motifs with contemporary aesthetics.</p>
<p>Whether you're preparing for a wedding, festival, or simply want to adorn your hands with beautiful art, this collection of designs offers something for everyone.</p>

<h2>Traditional Bridal Patterns</h2>
<p>Bridal mehndi is characterized by intricate, full-coverage designs that extend from fingertips to elbows. Common motifs include paisleys, lotus flowers, peacocks, and mandala patterns. These designs symbolize joy, beauty, and spiritual awakening.</p>

<h3>Modern Minimalist Styles</h3>
<p>Not everyone wants full coverage, and that's where minimalist mehndi shines. Think delicate vine patterns along a single finger, a small mandala on the palm, or geometric line work on the back of the hand. These designs are perfect for everyday wear and look incredibly chic.</p>

<h2>Application Tips for Beginners</h2>
<p>Start with store-bought henna cones for consistency. Practice basic shapes on paper before moving to skin. Apply on clean, dry hands for the best stain. Leave the paste on for at least 4-6 hours — overnight gives the richest color. Avoid water for 12 hours after removal.</p>
<p>For darker stains, apply a mixture of lemon juice and sugar over the dried paste. The natural heat from your body also helps develop a deeper color.</p>`
  },
  {
    id: "4",
    slug: "diy-christmas-ornaments-dollar-store",
    title: "DIY Christmas Ornaments with Dollar Store Items",
    excerpt: "Transform inexpensive dollar store finds into gorgeous holiday decorations. Budget-friendly ideas that look anything but cheap!",
    category: "Decor",
    image: articleChristmas,
    date: "March 15, 2025",
    readTime: "7 min read",
    author: "Crafted Wizard",
    content: `<h2>Dollar Store Magic for the Holidays</h2>
<p>Who says beautiful Christmas decorations have to break the bank? With a little creativity and a trip to the dollar store, you can create ornaments and décor pieces that rival expensive department store finds.</p>
<p>These projects are perfect for crafting with kids, hosting a craft night with friends, or simply adding a personal touch to your holiday decorations.</p>

<h2>Glitter Ball Ornaments</h2>
<p>Pick up clear plastic ornament balls and floor polish from the dollar store. Pour a small amount of floor polish inside the ball, swirl to coat, then pour in fine glitter. The result? Sparkling ornaments that look like they came from a boutique shop.</p>

<h3>Ribbon Wreath Ornaments</h3>
<p>Wire wreath frames and spools of ribbon are dollar store staples. Cut ribbon into short strips and tie them around the frame until it's full and fluffy. Add a mini bow at the top for a charming mini wreath ornament.</p>

<h2>Display Ideas</h2>
<p>Arrange your handmade ornaments in a glass bowl as a centerpiece, string them along a garland for the mantle, or gift them in clear cellophane bags with a ribbon. Handmade ornaments also make thoughtful teacher gifts, neighbor presents, and stocking stuffers.</p>`
  },
  {
    id: "5",
    slug: "crochet-bookmark-patterns-beginners",
    title: "Crochet Bookmark Patterns for Beginners",
    excerpt: "Learn to crochet adorable bookmarks with these easy-to-follow patterns. From simple strips to cute character designs, perfect for gifting.",
    category: "Crafts",
    image: articleCrochet,
    date: "March 10, 2025",
    readTime: "9 min read",
    author: "Crafted Wizard",
    content: `<h2>Why Crochet Bookmarks?</h2>
<p>Crochet bookmarks are the perfect small project for beginners and experienced crafters alike. They work up quickly, use minimal yarn, and make wonderful handmade gifts for the book lovers in your life.</p>
<p>Plus, they're a great way to practice new stitches and techniques without committing to a large project.</p>

<h2>Basic Chain Bookmark</h2>
<p>Start with the simplest pattern: chain 50 stitches, then single crochet back along the chain. Add a tassel at the bottom by looping yarn through the last stitch. This project takes about 15 minutes and teaches the fundamental chain and single crochet stitches.</p>

<h3>Flower Bookmark Pattern</h3>
<p>Create a simple flat flower with 5 petals using a magic ring. Chain a long stem from the center and add a leaf or two along the way. Use contrasting colors for the flower center and petals to make it pop against book pages.</p>

<h2>Corner Bookmark Design</h2>
<p>These clever bookmarks slip over the corner of a page. Crochet a small triangle, then add character features like animal ears, eyes, and a nose. Popular designs include cats, foxes, owls, and monsters. Kids especially love these fun, functional accessories!</p>
<p>For a finishing touch, block your bookmarks by dampening them and pinning them flat to dry. This gives them a crisp, professional look that holds its shape beautifully inside a book.</p>`
  },
  {
    id: "6",
    slug: "vision-board-ideas-that-work",
    title: "Vision Board Ideas That Actually Work",
    excerpt: "Create a powerful vision board that helps you manifest your goals. Tips on layout, imagery, and intention-setting for an effective board.",
    category: "DIY",
    image: articleVision,
    date: "March 5, 2025",
    readTime: "6 min read",
    author: "Crafted Wizard",
    content: `<h2>The Science Behind Vision Boards</h2>
<p>Vision boards aren't just a trendy craft project — research in psychology suggests that visualization can genuinely help you achieve your goals. When you regularly see images and words that represent your aspirations, your brain starts to recognize opportunities aligned with those goals.</p>
<p>The key is creating a board that resonates deeply with you, not just looks pretty on Instagram (though that's a bonus!).</p>

<h2>Choosing Your Format</h2>
<p>Traditional cork boards and poster boards work great, but don't overlook digital options. Apps and tools can help you create vision boards you can set as your phone wallpaper or desktop background for constant motivation.</p>

<h3>Gathering Meaningful Imagery</h3>
<p>Flip through magazines, print photos, or create your own artwork. Choose images that evoke a strong emotional response. Include specific goals (a dream home, career milestone) alongside feelings you want to cultivate (peace, adventure, connection).</p>

<h2>Layout and Design Tips</h2>
<p>Organize your board into life categories: career, relationships, health, travel, personal growth. Use a mix of images, quotes, and keywords. Leave some white space so it doesn't feel overwhelming. Add washi tape borders and sticker accents for a polished, Pinterest-worthy look.</p>
<p>Place your finished board somewhere you'll see it daily — your bedroom wall, office desk, or bathroom mirror. Take a few moments each morning to look at it and visualize yourself living those goals. Consistency is what makes vision boards truly effective.</p>`
  },
];

export const categories = ["All", "DIY", "Crafts", "Decor", "Nail Art", "Costumes"];

export const popularTags = ["#ClayNails", "#Origami", "#ChristmasDIY", "#MehndiDesign", "#Crochet", "#VisionBoard"];
