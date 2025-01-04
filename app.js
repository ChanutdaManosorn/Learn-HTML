    <!-- JavaScript -->
    <script>
        const image = document.getElementById("draggable-image");
        let isDragging = false;
        let offsetX, offsetY;

        image.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                const container = image.parentElement;
                const rect = container.getBoundingClientRect();
                image.style.position = "absolute";
                image.style.left = `${e.clientX - offsetX - rect.left}px`;
                image.style.top = `${e.clientY - offsetY - rect.top}px`;
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    </script>
