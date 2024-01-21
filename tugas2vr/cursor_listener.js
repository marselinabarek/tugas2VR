AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('mouseenter', this.onEnter);
      this.el.addEventListener('mouseleave', this.onLeave);
    },
    onEnter: function () {
      // Aksi yang ingin diambil saat hover
    },
    onLeave: function () {
      // Aksi yang ingin diambil saat keluar dari hover
    },
  });
  