<?php
class Segitiga
{
    private $tinggi;

    // Constructor untuk set tinggi segitiga
    public function __construct($tinggi)
    {
        $this->tinggi = $tinggi;
    }

    // Method untuk membuat segitiga sama sisi
    public function segitigaSamaSisi()
    {
        for ($i = 1; $i <= $this->tinggi; $i++) {
            // Cetak spasi
            for ($j = $this->tinggi - $i; $j > 0; $j--) {
                echo " "; // Pastikan hanya menggunakan spasi tunggal
            }
            // Cetak bintang
            for ($k = 1; $k <= (2 * $i - 1); $k++) {
                echo "*";
            }
            echo "\n"; // Baris baru
        }
    }

    // Method untuk membuat segitiga sama sisi terbalik
    public function segitigaSamaSisiTerbalik()
    {
        for ($i = $this->tinggi; $i >= 1; $i--) {
            // Cetak spasi
            for ($j = $this->tinggi - $i; $j > 0; $j--) {
                echo " "; // Pastikan hanya menggunakan spasi tunggal
            }
            // Cetak bintang
            for ($k = 1; $k <= (2 * $i - 1); $k++) {
                echo "*";
            }
            echo "\n"; // Baris baru
        }
    }
}

// Membuat instance class Segitiga
$segitiga = new Segitiga(5);

// Memanggil method untuk mencetak segitiga sama sisi
echo "Segitiga Sama Sisi:\n";
$segitiga->segitigaSamaSisi();

// Memanggil method untuk mencetak segitiga sama sisi terbalik
echo "\nSegitiga Sama Sisi Terbalik:\n";
$segitiga->segitigaSamaSisiTerbalik();
?>