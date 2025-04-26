let mockData = [
    {
      id: '1',
      title: 'First Love Letter 💌',
      content: 'Dear diary, today I fell in love with React... 💘',
      date: '2025-04-01'
    },
    {
      id: '2',
      title: 'Cherry Blossom Walk 🌸',
      content: 'Spring breeze, pink petals, soft feelings ✨',
      date: '2025-04-03'
    }
  ];

  export const fetchAllDiaries = async () => {
    return new Promise(resolve => setTimeout(() => resolve(mockData), 500));
  };
  
  export const fetchDiaryById = async (id) => {
    return new Promise(resolve => setTimeout(() => resolve(mockData.find(e => e.id === id)), 300));
  };
  
  export const createDiary = async (entry) => {
    return new Promise(resolve => {
      const newEntry = { ...entry, id: Date.now().toString() };
      mockData.unshift(newEntry);
      setTimeout(() => resolve(newEntry), 300);
    });
  };