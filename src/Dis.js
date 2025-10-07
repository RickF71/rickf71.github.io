import React from 'react';
import { Container, Table } from 'react-bootstrap';

export const Dis = () => {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Container className="py-4 text-light">
        {/* ===== Law of Meaning Section ===== */}
        <section className="text-center mb-5">
          <h2 className="text-info fw-bold mb-3">The Obvious but Invisible Law of Meaning</h2>
          <p className="lead text-secondary fst-italic">
            Every age discovers the constraint it has been living under all along.<br />
            The 19th century found the conservation of energy.<br />
            The 21st will discover the conservation of <strong>intention</strong>.
          </p>
          <p>
            For decades, computation has been measured by <em>power</em>—FLOPS per watt,
            throughput per dollar, speed per transistor. But computation was never neutral;
            it has always been the translation of <em>intent into action through information</em>.
            When that intent is unaccounted for, the work becomes meaningless, no matter how
            efficient the circuitry.
          </p>
          <p>
            <strong>Direct Individual Sovereignty (DIS)</strong> makes this visible.
            It asserts that every act of computation must carry provenance—an identifiable
            consent, a verifiable “why.” Once that requirement exists, the definition of
            efficiency itself must evolve.
          </p>
          <p className="fst-italic">
            The new measure is not <em>work per energy</em>, but <strong>meaning per joule</strong>—
            the density of legitimate, authorized transformation in a system.
          </p>
          <p>
            We are not replacing Moore’s Law. We are completing it—extending physics into
            semantics. The next frontier is not faster silicon; it’s transparent intention.
          </p>
        </section>

        <hr className="border-secondary my-5" />

        {/* ===== Main DIS Content ===== */}
        <h2 className="text-center mb-4 text-info">
          DIS: Declaration and Direct Individual Sovereignty
        </h2>

        <p className="fst-italic text-center text-secondary">
          “A moral declaration made enforceable by direct computation.”
        </p>

        <section className="my-4">
          <p><strong>DIS</strong> exists in two inseparable layers of meaning:</p>
          <ol>
            <li><strong>The Declaration of Individual Sovereignty</strong> — the moral and philosophical charter.</li>
            <li><strong>Direct Individual Sovereignty</strong> — the technical and operational protocol.</li>
          </ol>
          <p>
            Together, they form the foundation and function of a system that aligns computation with consent.
          </p>
        </section>

        <hr className="border-secondary" />

        <section className="my-4">
          <h4 className="text-info">1. The Declaration of Individual Sovereignty</h4>
          <p>
            The <strong>Declaration</strong> is the philosophical root of DIS. It states that
            <em> authority flows upward</em> from the individual — not downward from institutions,
            corporations, or algorithms.
          </p>
          <blockquote className="border-start border-info ps-3 fst-italic text-muted">
            “No computation shall act without the informed consent of the person it affects.”
          </blockquote>
          <p>
            This declaration establishes the <strong>moral invariant</strong> of
            the system — sovereignty as an unalienable property of conscious
            agents. It’s a statement of intent, a social contract between
            intelligence and those who authorize its use.
          </p>
        </section>

        <hr className="border-secondary" />

        <section className="my-4">
          <h4 className="text-info">2. Direct Individual Sovereignty</h4>
          <p>
            The <strong>Direct</strong> layer operationalizes that principle. It
            transforms moral intent into verifiable computation — through consent
            tokens, source attribution, signed receipts, and domain-based
            provenance.
          </p>
          <ul>
            <li>Every action carries a <code>by:</code> field identifying its authorizing domain.</li>
            <li>Every data exchange includes a <em>consent trail</em>.</li>
            <li>Every AI acts within the <em>authority scope</em> of its user.</li>
          </ul>
          <p>
            Thus, sovereignty is not only declared but <strong>enacted and verified</strong>,
            replacing abstraction with proof — turning ethical law into executable logic.
          </p>
        </section>

        <hr className="border-secondary" />

        <section className="my-4">
          <h4 className="text-info">3. The Unifying Principle</h4>
          <p>
            The <strong>Declaration</strong> gives sovereignty its <em>legitimacy</em>;
            the <strong>Direct</strong> implementation gives it <em>persistence</em>.
            One without the other is incomplete:
          </p>
          <ul>
            <li>A <strong>Declaration</strong> without enforcement is moral poetry.</li>
            <li>A <strong>Direct</strong> system without moral grounding is mechanized tyranny.</li>
          </ul>
          <p>
            <strong>DIS unites both:</strong> a moral declaration made enforceable by direct computation.
          </p>
        </section>

        <hr className="border-secondary" />

        <section className="my-4">
          <h4 className="text-info">4. Core Axioms</h4>
          <Table bordered responsive className="table-dark align-middle">
            <thead>
              <tr>
                <th>Level</th>
                <th>Description</th>
                <th>Keyword</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Declaration</strong></td>
                <td>
                  The philosophical statement that every individual holds ultimate
                  authority over actions and data pertaining to them.
                </td>
                <td className="text-info fw-bold">Legitimacy</td>
              </tr>
              <tr>
                <td><strong>Direct</strong></td>
                <td>
                  The computational system ensuring that all actions within a network
                  reflect explicit, verifiable consent.
                </td>
                <td className="text-info fw-bold">Mechanism</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <footer className="text-center mt-5 text-secondary small border-top pt-3">
          © {new Date().getFullYear()} Richard Fleischman — Direct Individual Sovereignty Project
        </footer>
      </Container>
    </div>
  );
};
