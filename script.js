document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('islamic-search-input');
    const searchButton = document.getElementById('islamic-search-button');
  
    const performSearchRedirect = () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        // مثال للبحث في جوجل:
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  
        // إذا كان لديك صفحة بحث داخل موقعك، ستكون هكذا (مثال):
        // window.location.href = `/search_results.html?query=${encodeURIComponent(searchTerm)}`;
  
        // أو إذا كان لديك API بحث، يمكنك استدعاؤه هنا
        // fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
        //   .then(response => response.json())
        //   .then(data => console.log(data));
  
      } else {
        alert('الرجاء إدخال كلمة للبحث عنها.');
      }
    };
  
    // ربط الدالة بزر البحث عند النقر عليه
    searchButton.addEventListener('click', performSearchRedirect);
  
    // ربط الدالة بضغط مفتاح Enter في حقل الإدخال
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        performSearchRedirect();
      }
    });
});
  