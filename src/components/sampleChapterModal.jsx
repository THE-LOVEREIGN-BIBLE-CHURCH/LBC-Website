import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PropTypes from "prop-types";

export default function SampleChapterModal({ isOpen, onClose, book }) {
  const [loading, setLoading] = useState(true);

  // Simulate loading the chapter content
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
    }
  }, [isOpen]);

  // Sample chapter content for each book
  const getSampleContent = (bookId) => {
    const chapters = {
      1: {
        title: "Chapter 1: Understanding Your Calling",
        content: `
          <h2>Understanding Your Calling</h2>
          <p>The concept of calling is deeply rooted in scripture. In Romans 11:29, we read that "the gifts and the calling of God are irrevocable." This profound statement reveals something essential about God's character and His relationship with us.</p>
          <p>When God calls you, it is not a temporary assignment or a fleeting interest. It is an eternal purpose that He has designed specifically for you. Your calling is woven into the very fabric of your being—your personality, your experiences, your talents, and even your struggles.</p>
          <h3>Discovering Your Purpose</h3>
          <p>Many believers struggle with identifying their calling. They wonder if they've missed God's plan or if they're currently walking in it. The truth is that discovering your calling is often a journey rather than a single moment of revelation.</p>
          <p>Consider Moses, who spent forty years in the wilderness before encountering the burning bush. Or David, who was anointed as a young shepherd but didn't take the throne until many years later. God's timing is perfect, and the process of discovering your calling is itself part of your spiritual formation.</p>
          <p>In the pages that follow, we will explore practical steps to discern, embrace, and fulfill the unique calling that God has placed on your life...</p>
        `,
      },
      2: {
        title: "Chapter 1: The Foundation of Church Systems",
        content: `
          <h2>The Foundation of Church Systems</h2>
          <p>Every thriving ministry is built upon well-designed systems and structures. Just as the human body functions through interconnected systems, the body of Christ requires organizational frameworks that facilitate growth, health, and effectiveness.</p>
          <p>In 1 Corinthians 14:40, Paul instructs that "all things should be done decently and in order." This biblical principle underscores the importance of intentional organization within the church. Without proper systems, even the most passionate ministry efforts can become chaotic and ultimately ineffective.</p>
          <h3>Why Systems Matter</h3>
          <p>Systems provide the necessary infrastructure for sustainable growth. They allow churches to:
          <ul>
            <li>Efficiently steward resources</li>
            <li>Effectively disciple new believers</li>
            <li>Consistently deliver ministry services</li>
            <li>Seamlessly integrate new members</li>
            <li>Strategically expand outreach efforts</li>
          </ul>
          </p>
          <p>When Jesus fed the five thousand, He implemented a system—having people sit in groups, distributing the food through the disciples, and collecting the leftovers. This demonstrates that even miraculous ministry benefits from systematic approaches.</p>
          <p>In the following chapters, we will examine 13 essential systems that every growing church needs to implement...</p>
        `,
      },
      3: {
        title: "Chapter 1: The Sacred Call to Ministry",
        content: `
          <h2>The Sacred Call to Ministry</h2>
          <p>Ministry is not merely a profession—it is a sacred calling. In Ephesians 4:11-12, Paul writes, "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ."</p>
          <p>This passage reveals the dual purpose of ministry: equipping God's people and building up the church. Those called to ministry work serve as both trainers and builders in God's kingdom.</p>
          <h3>The Heart of Ministry</h3>
          <p>At its core, ministry is about service. The Greek word for ministry, "diakonia," literally means "service." Jesus modeled this servant leadership when He washed His disciples' feet and when He declared that He came "not to be served but to serve" (Mark 10:45).</p>
          <p>This servant-hearted approach stands in stark contrast to worldly leadership models that emphasize power, control, and personal advancement. In God's kingdom, greatness is measured by one's willingness to serve others.</p>
          <p>Ministry also requires sacrifice. Like Paul, those in ministry often experience hardship, rejection, and personal cost. Yet these sacrifices are made willingly out of love for God and His people.</p>
          <p>As we explore the work of ministry in this book, we will examine both the practical skills and the spiritual qualities needed to serve effectively in God's kingdom...</p>
        `,
      },
    };

    return (
      chapters[bookId] || {
        title: "Sample Chapter",
        content: "<p>Sample chapter content coming soon...</p>",
      }
    );
  };

  // Get content for the current book
  const chapterContent = book ? getSampleContent(book.id) : null;

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !book) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-3xl max-h-[80vh] bg-gradient-to-b from-blue-900/90 to-[#152745]/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">{book.title}</h3>
                <p className="text-blue-200 text-xs">Sample Chapter</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-5 max-h-[calc(80vh-64px)]">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-10 h-10 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-blue-200 text-sm">
                  Loading sample chapter...
                </p>
              </div>
            ) : (
              <div className="prose prose-invert prose-blue max-w-none">
                <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {chapterContent.title}
                </h1>
                <div
                  className="text-blue-100/90 space-y-4 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: chapterContent.content }}
                />

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-blue-200 text-sm mb-3">
                    Want to continue reading?
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
                      Purchase Book
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

SampleChapterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    pages: PropTypes.string,
    year: PropTypes.number,
    availableAt: PropTypes.arrayOf(PropTypes.string),
    formats: PropTypes.arrayOf(PropTypes.string),
  }),
};
