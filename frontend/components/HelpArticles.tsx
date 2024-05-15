
import { ArticlesCard } from '@/components/index';

const HelpArticles = () => {
  
  return (
    <div className='bg-white py-6'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 gap-x-3.5 mt-4">
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
          <ArticlesCard type='book_outline.svg' title="Getting started" 
          content="Everything you need to know setting up your account on Ocampus."
          authorPic="logo.svg"
          totalArticles={4}
          authorUserName="Goke"
          />
        </div>
    </div>
  )
}

export default HelpArticles