import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "PAULETTE KOVARNIK",
    role: "MANAGER",
    image: "/team/paulette.jpg",
    description: "Meet our office manager Paulette. Originally from Wharton, TX to help run her R&J towing business. She brings over 40 years' experience in management, customer service and sales."
  },
  {
    name: "RAYMOND CHARANZA",
    role: "OWNER/LEAD DRIVER",
    image: "/team/raymond.jpg",
    description: "Meet our lead driver, Raymond! Originally a native of the Brazos area with over towing years at the district 2 Bryan Fire Department. Raymond brings a wealth of knowledge and skills to R & J Towing."
  },
  {
    name: "BRITTANY BROWNING",
    role: "DISPATCHER",
    image: "/team/brittany.jpg",
    description: "Meet our dispatcher Brittany. She was raised in Bryan and just recently moved back home from Georgia. Brittany has over 20 years of experience in customer relations and support."
  },
  {
    name: "TERRY HUSTED",
    role: "DRIVER",
    image: "/team/terry.jpg",
    description: "Meet our driver, Terry. Originally from Burleson, Terry has been in the Brazos area for over 30 years. Terry has been in the towing industry for over 25 years and brings a wealth of knowledge to R&J Towing."
  }
];

export const TeamSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <img src="/logo-icon.png" alt="R&J Towing" className="w-16 h-16" />
            <h2 className="text-neon-green text-5xl font-bold tracking-wider">
              MEET OUR TEAM
            </h2>
            <img src="/logo-icon.png" alt="R&J Towing" className="w-16 h-16" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 group hover:bg-gray-800 transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-neon-green font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-white font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 