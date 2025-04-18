import { motion } from 'framer-motion';
import ExpertMatchCard from './ExpertMatchCard';
import { Brain, CheckCircle, Code, FileText, Mountain, LinkedinIcon, 
  MessageCircle, Puzzle, Target, Tent, Trophy, TwitterIcon, 
  Users, RefreshCw, Rocket, TrendingUp, Award, Calendar,
  ArrowRight, MessageSquare, Globe, Check 
} from 'lucide-react';

const GTMJourney = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <motion.div 
        className="flex gap-4 overflow-x-auto pb-6 px-4 snap-x snap-mandatory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <ExpertMatchCard className="w-[280px] h-[180px]" />
        </div>
        
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className="w-[280px] h-[180px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gtm-dark mb-2">GTM Sprints</h3>
              <p className="text-sm text-gray-600">8-week launch plan</p>
            </div>
            <ArrowRight className="text-gtm-pink self-end" />
          </div>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className="w-[280px] h-[180px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gtm-dark mb-2">GTM Rituals</h3>
              <p className="text-sm text-gray-600">Weekly team alignment</p>
            </div>
            <ArrowRight className="text-gtm-pink self-end" />
          </div>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className="w-[280px] h-[180px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gtm-dark mb-2">Conversion Boost</h3>
              <p className="text-sm text-gray-600">Double your rate in 2 months</p>
            </div>
            <ArrowRight className="text-gtm-pink self-end" />
          </div>
        </div>
      </motion.div>
      
      <div className="flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default GTMJourney;
