import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {ngi0Projects} from "./ngi0Projects";

const COMPRESSION_CARDS: ProjectCardType[] = [
    ngi0Projects.zipFileFormatDescription,
    ngi0Projects.zipLinting
];

const COMPRESSION_TAGS: string[] = [];

const COMPRESSION_PROJECTS: ProjectPageType = {
    pageTitle: "Data Compression Dossier",
    menuTitle: "Data Compression Dossier",
    projectDescription: [
        {
            header: "Data Compression",
            text: `Data compression is a procedure that aims to reduce the size of data. This material is exclusively devoted to lossless compression, where the original data can be reconstructed without distortion. It will introduce you to the methods that it will further compare in terms of the achieved compression ratio.`,
        },
        {
            header: "Brotli/Zstd",
            text: `Brotli was developed in 2013 by Google. It uses a combination of LZ77, Huffman coding, and context modeling. It should provide a better compression ratio than Deflate. The tool is focused on compressing HTML, CSS and JavaScript files. Similarly, the Zstandard (Zstd) tool was released by Facebook in 2015. It is a combination of LZ77 and entropy coding. It usually achieves similar compression ratios to Deflate, but is faster. At maximum compression, Zstd reaches compression ratios close to LZMA. Compared to libraries implementing Deflate, it achieves higher compression and decompression speeds.`,
            tags: ["lz77", "Huffman", "Facebook"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/zstd.png",
            links: [
                {
                    label: "Brotli",
                    link: "https://www.brotli.org/"
                }
            ]
        },
        {
            header: "bzip2",
            text: `The bzip2 compression tool was first released in 1996 by British programmer Julian Seward. It is based on Burrows–Wheeler transform (BWT), move-to-front transform (MTF) and Huffman coding. bzip2 compresses most files more efficiently than Deflate (.zip, .gz), but is noticeably slower. The spiritual successor to bzip2 is bzip3, which was first released in 2022. It achieves even higher compression ratios than bzip2, but at the cost of lower speed. It is based on Burrows–Wheeler transform, LZ+P method and arithmetic encoder.`,
            tags: ["bwt", "mtf", "lz+p"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/bzip2.png",
            links: [
                {
                    label: "bzip2/bzip3",
                    link: "https://sourceware.org/bzip2/"
                }
            ]
        },
        {
            header: "gzip",
            text: `Probably the best-known compression method is Deflate, which is used in, for example, the gzip tool in .gz files. The author of the Deflate method was the brilliant American programmer Phil Katz, who introduced it in 1992 in his PKZIP archiving program. Internally, it is a combination of the LZ77 dictionary compression method and Huffman coding. Before compression, the input data is divided into blocks of different sizes. Huffman tables are then compiled for each block separately. Dividing into blocks during compression is a complex optimization task that is solved by the Zopfli tool. Zopfli increases the compression ratio at the cost of an extremely slow compression speed.`,
            tags: ["Deflate", "Huffman", "gz"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/gzip3d.png",
            links: [
                {
                    label: "gzip",
                    link: "https://www.gzip.org/"
                }
            ]
        },
        {
            header: "LZ4/lzop",
            text: `LZ4 is a dictionary method from 2011 focused on compression and decompression speed. It implements LZ77 and, unlike other algorithms, does not use entropy coding. There is an LZ4 HC offshoot that achieves higher compression ratios at the cost of speed; bitstream is fully compatible with LZ4. LZ4 is comparable to the LZO (Lempel–Ziv–Oberhumer) method implemented by the lzop tool. The latter is focused on the speed of decompression, but it does not reach such speeds as LZ4. lzop was first released in 1997; does not have an official specification.`,
            tags: ["LZ4", "LZ77"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/lzop.png",
            links: [
                {
                    label: "lzop",
                    link: "https://www.lzop.org/"
                }
            ]
        },
        {
            header: "xz/lzma",
            text: `Other widely used tools are xz and lzma from the XZ Utils package. The xz tool compresses data using the LZMA2 method. In contrast, the lzma tool uses the LZMA method. LZMA is an algorithm developed by programmer Igor Pavlov for his archiving program 7-Zip in 1999. It consists of the LZ77 method, Markov chains and an arithmetic coder (range coder). Regarding the compression ratio, the difference between the LZMA and LZMA2 methods is negligible.`,
            tags: ["LZMA2", "LZMA"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/xz.png",
            links: [
                {
                    label: "xz",
                    link: "https://tukaani.org/xz/"
                }
            ]
        },
        {
            header: "zpaq",
            text: `Less well-known data compression tools include zpaq, which is designed for incremental backups. This is an archive program that can only add files to the archive. But it can return to the previous state and load older versions of files. As preprocessing, zpaq allows you to use the LZ77, BWT and E8E9 methods. It uses context modeling for its own compression. The achieved compression ratios are very high. However, the compression and decompression speeds are very low. Unfortunately, the last release is from 2016 and active development is no longer ongoing.`,
            tags: ["LZ77", "BWT", "E8E9"],
            image: "https://www.fit.vut.cz/person/ivlnas/public/compressions/def-img/zpaq.png",
            links: [
                {
                    label: "zpaq",
                    link: "https://mattmahoney.net/dc/zpaq.html"
                }
            ]
        },
        {
            header: "Dataset",
            text: `
The comparison was made on the [Silesia dataset](https://sun.aei.polsl.pl/~sdeor/index.php?page=silesia), which consisted of the following files.

|File   |Description                          |Type    |Size    |
|-------|-------------------------------------|--------|--------|
|dickens|Collected works of Charles Dickens   |text    |9,72 MiB|
|mr     |Medical magnetic resonanse image     |picture |9,51 MiB|
|ooffice|A dll from Open Office.org 1.01      |exe     |5,87 MiB|
|osdb   |Sample database in MySQL format      |database|9,62 MiB|
|reymont|Text of the book CHŁOPI by W. Reymont|pdf     |6,32 MiB|
|sao    |The SAO star catalog                 |bin data|6,92 MiB|
|xml    |Collected XML files                  |html    |5,10 MiB|
|x-ray  |X-ray medical picture                |image   |8,08 MiB|
`,
        },
        {
            header: "Comparison",
            text: `
Now let's look at the comparison of the maximum compression ratio achieved (more is better).

|        | dickens    | mr         | ooffice    | osdb       | reymont    | sao        | xml         | x-ray      |
|--------|------------|------------|------------|------------|------------|------------|-------------|------------|
| lzop   | 2.2803     | 2.4523     | 1.8408     | 2.3925     | 3.0753     | 1.2517     | 6.7689      | 1.2433     |
| lz4    | 2.3244     | 2.3784     | 1.7391     | 2.5489     | 3.2072     | 1.2787     | 7.0204      | 1.1802     |
| gzip   | 2.6461     | 2.7138     | 1.9907     | 2.7138     | 3.6396     | 1.3613     | 8.0709      | 1.4035     |
| zopfli | 2.7783     | 2.9060     | 2.0565     | 2.7966     | 3.9169     | 1.3847     | 8.5281      | 1.4756     |
| rar    | 3.2698     | 3.5758     | 2.6634     | 3.0469     | 4.2394     | 1.3068     | 10.7838     | 2.0164     |
| lzma   | 3.6006     | 3.6237     | 2.5351     | 3.5462     | 5.0383     | 1.6388     | 12.2943     | 1.8871     |
| xz     | 3.6000     | 3.6231     | 2.5346     | 3.5456     | 5.0374     | 1.6386     | 12.2910     | 1.8868     |
| zstd   | 3.5770     | 3.2103     | 2.3672     | 3.2550     | 4.9177     | 1.4502     | 11.7940     | 1.6436     |
| brotli | 3.6044     | 3.5317     | 2.4818     | 3.5812     | 4.9747     | 1.5812     | 12.4145     | 1.8096     |
| bzip2  | 3.6407     | 4.0841     | 2.1492     | 3.5984     | 5.3178     | 1.4678     | 12.1157     | 2.0918     |
| bzip3  | 4.5625     | **4.7031** | 2.4346     | 4.4589     | 6.7591     | 1.5517     | 13.1697     | **2.3172** |
| zpaq   | **4.8656** | 4.5708     | **3.4825** | **4.5745** | **6.9285** | **1.8598** | **16.3486** | 2.3092     |


What do we see from the table? The bzip3 tool is very efficient. In most cases, however, zpaq surpassed it. Furthermore, we see that bzip2, brotli, zstd, lzma and xz are also decently effective. Then we have Deflate, where we see a significant jump in compression efficiency. So neither gzip nor Zopfli are very effective today. And then we have LZ4 and lzop, which you can see have a very low compression ratio. But that's the purpose. We want LZ4 to be very fast in compression and decompression at the cost of less efficient compression. Note which data compresses well for us. It is mainly an xml file, i.e. HTML files, on which a high compression ratio can be achieved. Other files are compressed a little less, but a typically achievable compression ratio is around 4.5.
`,
        },
        {
            header: "Conclusion",
            text: `In conclusion, we can say that zpaq and bzip3 are currently the most efficient compressors. Zopfli improves the compression ratio against gzip by 3–8% (still the same Deflate compression method). The tools lzop, lz4 and gzip are relatively fast but with a low compression ratio. LZMA, Zstd, Brotli methods achieve relatively high compression ratios, however bzip2, bzip3 and zpaq are even slightly more efficient. LZ4 has by far the fastest decompression (but low compression ratio), Zstd is also quite fast. LZMA, bzip2, bzip3 and zpaq are very slow when decompressing. Tools can be focused on compression speed (will bring a reduced compression ratio) – LZ4 wins here.`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: COMPRESSION_CARDS
                }
            ]
        },
    ]
};

export const COMPRESSION_DOSSIER_PATHNAME = "compression";

export const DOSSIER: DossierType = {
    pathName: COMPRESSION_DOSSIER_PATHNAME,
    image: "https://nlnet.nl/project/ZIP-format/zip.logo.svg",
    header: "Compression",
    subheader: "Data Compression",
    tags: ["Data", "Compression", "Comparison"],
    link: `/ngi0/${COMPRESSION_DOSSIER_PATHNAME}`,
    cards: COMPRESSION_CARDS,
    tagsDossierDetail: COMPRESSION_TAGS,
    projects: COMPRESSION_PROJECTS,
    detailedProjects: {},
    comparisons: {}
};
