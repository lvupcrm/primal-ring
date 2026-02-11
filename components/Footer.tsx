export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-white/5 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <div className="text-2xl font-bold tracking-tighter">LVUP</div>
                        <p className="text-muted-foreground max-w-sm">
                            데이터로 증명하는 피트니스 비즈니스 파트너.<br />
                            운영의 비효율을 없애고 본질에 집중하세요.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">서비스</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#features" className="hover:text-foreground">기능 소개</a></li>
                            <li><a href="#solution" className="hover:text-foreground">솔루션</a></li>
                            <li><a href="#pricing" className="hover:text-foreground">요금 안내</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">회사</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">회사 소개</a></li>
                            <li><a href="#" className="hover:text-foreground">채용</a></li>
                            <li><a href="#" className="hover:text-foreground">블로그</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2026 LVUP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
